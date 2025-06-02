import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "./common/LoadingSpinner";
import { useState, useEffect } from "react";

export default function PrivateRoutes() {
    let {user, loading} = useAuth(); // Variable del usuario loggeado
    let [spinner, setSpinner] = useState(true);

    useEffect(()=>{
        let time = setTimeout(() => {
          setSpinner(false);  
        },1000);
        return ()=> clearTimeout(time);
    },[])

    if (loading || spinner) {
        return <LoadingSpinner/>;
    }
    

    //Si no hay usuario, redirige al login
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    
    //Si hay usuario,permitir acceso a las rutas privadas
    return <Outlet />;
}
