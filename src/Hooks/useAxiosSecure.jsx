import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
console.log('object');
    return axiosSecure;
};

export default useAxiosSecure;