import Footer from '../components/Footer';
import FooterTop from '../components/FooterTop';
import { useNavigate } from 'react-router-dom';
import datos from "../../assets/data.json";
import { getDashboardRoutes } from '../../components/auth/common/getDashboardRoutes';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  console.log(datos.user);
  const { register, handleSubmit } = useForm();

  const onSubmit = (dataForm) => {
    console.log("datos ingresados:", dataForm);

    // Verificar usuario con email y password
    const userVerify = datos.user.find((u)=>{
          return u.email == dataForm.email && u.password == dataForm.password;
    });
    console.log("usuario: ", userVerify);

    if (userVerify) {
      login(userVerify); // guarda usuario en contexto o localStorage
      navigate(getDashboardRoutes(userVerify.rol));
    } else {
      alert("Credenciales incorrectas o usuario no encontrado");
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
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email")}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password")}
                  required
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
