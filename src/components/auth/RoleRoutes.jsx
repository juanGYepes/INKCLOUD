import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "./common/LoadingSpinner";

export default function RoleRoutes({ allowedRoles }) {
  const { user, loading } = useAuth(); 


  console.log("user:", user);
  console.log("user.role:", user?.rol);
  console.log("allowedRoles:", allowedRoles);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!user.rol || !allowedRoles.includes(user.rol)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
