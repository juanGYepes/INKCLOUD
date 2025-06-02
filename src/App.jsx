import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { AuthProvider } from "./context/AuthContext"; // ✅ Importa el Provider correctamente
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
              <Route element={<RoleRoutes allowedRoles={["admin"]} />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/report" element={<ReportPage />} />
                <Route path="/dashboard/admin" element={<Dashboard />} />
              </Route>

              <Route element={<RoleRoutes allowedRoles={["customer"]} />}>
                <Route path="/dashboard/customer" element={<CustomerPage />} />
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
