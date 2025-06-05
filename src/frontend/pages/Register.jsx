import React, { useState } from "react";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    idUsuario: "",
    nomUsuario: "",
    dirUsuario: "",
    celular: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    rol: "",
    activo: "si"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.contrasena !== formData.confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Usuario registrado exitosamente");
        // Limpiar el formulario o redirigir al usuario
      } else {
        const errorData = await response.json();
        alert(`Error al registrar usuario: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Ocurrió un error al registrar el usuario");
    }
  };

  return (
    <>
      <div className="navbar navbar-expand navbar-light bg-warning topbar mb-4 static-top shadow container d-flex align-items-center justify-content-center">
        <h4 className="m-0 font-weight-bold text-dark">Registro de Usuario</h4>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Ingrese su identificación</label>
                    <input
                      type="text"
                      className="form-control"
                      name="idUsuario"
                      value={formData.idUsuario}
                      onChange={handleChange}
                      placeholder="Ingrese su ID"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nombre completo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nomUsuario"
                      value={formData.nomUsuario}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      name="dirUsuario"
                      value={formData.dirUsuario}
                      onChange={handleChange}
                      placeholder="Tu dirección"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Celular</label>
                    <input
                      type="text"
                      className="form-control"
                      name="celular"
                      value={formData.celular}
                      onChange={handleChange}
                      placeholder="Tu número celular"
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="rol">Rol</label>
                    <select
                      id="rol"
                      name="rol"
                      className="form-select form-control"
                      value={formData.rol}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccionar un rol</option>
                      <option value="cliente">Cliente</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="ejemplo@email.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      name="contrasena"
                      value={formData.contrasena}
                      onChange={handleChange}
                      placeholder="Contraseña"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirmar contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmarContrasena"
                      value={formData.confirmarContrasena}
                      onChange={handleChange}
                      placeholder="Repite la contraseña"
                      required
                    />
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

      <FooterTop />
      <Footer />
    </>
  );
}
