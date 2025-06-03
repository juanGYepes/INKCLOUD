import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 
import { getDashboardRoutes } from "../../components/auth/common/getDashboardRoutes";

function Dashboard() {
let {user} = useAuth();
let navigate = useNavigate();

useEffect(() => {
   if (user) {
      navigate(getDashboardRoutes(user.rol));
    } 
  },[user, navigate]);

  return null; // No se muestra nada solo redirige
}

export default Dashboard;
