import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PublicHome from "./frontend/pages/PublicHome";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./frontend/pages/Login";
import Register from "./frontend/pages/Register";
import NotFound from "./frontend/pages/NotFound";
import AdminPage from "./admin/pages/AdminPage";
import CustomerPage from "./admin/pages/CustomerPage";
import ReportPage from "./admin/pages/ReportPage";
import PublicRoutes from "./components/auth/PublicRoutes";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import RoleRoutes from "./components/auth/RoleRoutes";
import DashboardLayout from "./admin/pages/DashboardLayout";

import List from "./admin/components/List";
import ListPublic from "./admin/components/ListPublic";
import ListUser from "./admin/components/ListUser";
import ListPermis from "./admin/components/ListPermis";
import ListReport from "./admin/components/ListReport";
import Form from "./admin/components/Form";
import { AuthProvider } from "./context/AuthContext"; // ✅ Importa el Provider correctamente
import FormUser from "./admin/components/FormUser";
import FormReport from "./admin/components/FormReport";
import FormPermis from "./admin/components/FormPermis";
import FormPublic from "./admin/components/FormPublic";





function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Rutas Públicas */}
            <Route element={<PublicRoutes />}>
              <Route path="/" element={<PublicHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {/* Rutas Privadas */}
            <Route element={<PrivateRoutes />}>
              <Route element={<RoleRoutes allowedRoles={["admin", "customer"]} />}>{/* New */}
                <Route path="/dashboard" element={<DashboardLayout />} >
                <Route index element={<Dashboard />} />
                <Route path="libros" element={<List />} />     
                <Route path="libros/crear" element={<Form />} />  
                <Route path="post" element={<ListPublic />} />  
                <Route path="post/crear" element={<FormPublic />} />
                <Route path="users" element={<ListUser />} />  
                <Route path="users/crear" element={<FormUser />} />
                <Route path="reports" element={<ListReport />} />  
                <Route path="reports/crear" element={<FormReport />} /> 
                <Route path="permissions" element={<ListPermis />} />  
                <Route path="permissions/crear" element={<FormPermis />} />

                <Route path="admin" element={<AdminPage />} />
                <Route path="report" element={<ReportPage />} />
                  
                {/* Rutas para el cliente */}

                

                <Route path="customer" element={<CustomerPage />} />
                  
                </Route>
              </Route>
              </Route> 


            {/* Ruta 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
/* Linea 31 <Route path="/dashboard/report" element={<ReportPage />} />
                <Route path="/dashboard/admin" element={<Dashboard />} /> */