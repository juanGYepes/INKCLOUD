import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import LoadingSpinner from "./common/LoadingSpinner"

export default function PublicRoutes() {
    let {user, loading} = useAuth(); // Variable del usuario loggeado
    if (loading) {
        return <LoadingSpinner />;
    }

    if (user) {
      let redirectPath = user.rol == "admin"
        ? "/dashboard/admin" :
         user.rol == "customer"
        ? "/dashboard/customer" : "/dashboard";
        return <Navigate to={redirectPath} replace />;
      
    }
  //Si no hay usuario ,permitir acceso a  las rutas públicas
  return <Outlet />;
}
