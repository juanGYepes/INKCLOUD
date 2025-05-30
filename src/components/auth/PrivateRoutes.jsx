import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "./common/LoadingSpinner";

export default function PrivateRoutes() {
    let {user, loading} = useAuth(); // Variable del usuario loggeado
    if (loading) {
        return <LoadingSpinner/>;
    }
    

    //Si no hay usuario, redirige al login
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    
    //Si hay usuario,permitir acceso a las rutas privadas
    return <Outlet />;
}
