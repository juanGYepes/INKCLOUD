import React from "react";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";

export default function Register() {
  return (
    <>
      <div className="navbar navbar-expand navbar-light bg-warning topbar mb-4 static-top shadow container d-flex align-items-center justify-content-center">
        <h4 className="m-0 font-weight-bold text-dark"> Registro de Usuario</h4>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Ingrese su identificacion</label>
                    <input type="number" className="form-control" placeholder="Ingrese su Id" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" placeholder="Tu nombre completo" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Direccion </label>
                    <input type="text" className="form-control" placeholder="Tu direccion" />
                  </div> 
                  <div className="mb-3">
                    <label className="form-label">Celular </label>
                    <input type="text" className="form-control" placeholder="Tu # celular" />
                  </div> 
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="rol">Rol</label>
                    <select id="rol" className="form-select form-control">
                      <option value="">Seleccionar un rol</option>
                      <option value="cliente">Cliente</option>
                    </select>
                  </div>                                                 
                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" placeholder="ejemplo@email.com" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" placeholder="Repite la contraseña" />
                  </div>
                  <button type="submit" className="btn btn-warning w-100">
                    Registrarse
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTop/>
      <Footer/>
    </>
  );
}
