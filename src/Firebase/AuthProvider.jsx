import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

import auth from "./Firebase.config";
// import axiosPublic from "../Hooks/axiosPublic";
import useAxiosPublic from "../Hooks/axiosPublic";

// 1. Create and Export Auth Context
export const AuthContext = createContext(null);

// 2. Initialize Providers
const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();
    // 3. State Management
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 4. Auth Functions
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // const signInWithFacebook = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, facebookProvider);
    // }

    const logOut = async () => {
        setLoading(true);
        await signOut(auth);
        setLoading(false);
    }

    const updateUserProfile = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName, photoURL });
    }

    // 5. Effect to Observe Auth State Changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        console.log('res',res);
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    // 6. Context Value
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        // signInWithFacebook,
        logOut,
        updateUserProfile
    }

    // 7. Return Provider with Context Value
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}