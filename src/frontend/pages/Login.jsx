import Footer from '../components/Footer';
import FooterTop from '../components/FooterTop';
import { useNavigate } from 'react-router-dom';
import { getDashboardRoutes } from '../../components/auth/common/getDashboardRoutes';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (dataForm) => {
    try {
      const response = await fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idUsuario: dataForm.idUsuario,
          contrasena: dataForm.contrasena,
        }),
      });

      const user = await response.json();

      if (response.ok && user && user.rol) {
        login(user);
        navigate(getDashboardRoutes(user.rol));
      } else {
        alert("Credenciales incorrectas o usuario no encontrado");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Ocurrió un error al intentar iniciar sesión");
    }
  };

  return (
    <>
      <div className="navbar navbar-expand navbar-light bg-warning topbar mb-4 static-top shadow container d-flex align-items-center justify-content-between">
        <div className="logo fw-bold fs-3">INKCLOUD</div>
        <div className="d-flex align-items-center gap-3">
          <Link className="btn btn-link text-dark" to="/Register">Registrate</Link>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">ID de Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("idUsuario", { required: true })}
                  placeholder="Ej: 1037073495"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("contrasena", { required: true })}
                  placeholder="Tu contraseña"
                />
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
}