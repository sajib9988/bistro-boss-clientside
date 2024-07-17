import { useEffect, useState } from "react";
const useMenu = () => {
    
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const refetch =()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLoading(false);
        });

    }
    useEffect(() => {
      refetch()
    }, [loading])
    return [menu, loading, setLoading]
}
export default useMenu;
