import React, { useState } from 'react';

export default function FormUser() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    idUsuario: "",
    nomUsuario: "",
    dirUsuario: "",
    celular: "",
    correo: "",
    contrasena: "",
    rol: "",
    activo: "si"
  });

  // Función para manejar los cambios en los campos del formulario

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 // Función para manejar el envío del formulario
  // Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData) // Enviar los datos del formulario como JSON
      });

      if (response.ok) {
        alert("Usuario creado correctamente");

        // Limpiar formulario
        setFormData({
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
        // Redirigir a la lista de usuarios
        window.location.href = "/dashboard/users";
      } else {
        const errorData = await response.json();
        alert(`Error al crear usuario: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error de conexión al crear usuario");
    }
  }; 

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Crear Usuario</h1>
          <a href="/dashboard/usuarios" className="btn btn-primary btn-sm">
            <i className="fas fa-list fa-sm text-white-50"></i> Listado
          </a>
        </div>

        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input type="text" name="idUsuario" className="form-control" onChange={handleChange} required />
                <label className="form-label">ID Usuario</label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" name="nomUsuario" className="form-control" onChange={handleChange} required />
                <label className="form-label">Nombre</label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" name="dirUsuario" className="form-control" onChange={handleChange} />
                <label className="form-label">Dirección</label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" name="celular" className="form-control" onChange={handleChange} />
                <label className="form-label">Celular</label>
              </div>

              <div className="form-outline mb-4">
                <input type="email" name="correo" className="form-control" onChange={handleChange} required />
                <label className="form-label">Correo Electrónico</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" name="contrasena" className="form-control" onChange={handleChange} required />
                <label className="form-label">Contraseña</label>
              </div>

              <div className="form-outline mb-4">
                <select name="rol" className="form-select form-control" onChange={handleChange} required>
                  <option value="">Seleccionar un rol</option>
                  <option value="admin">Administrador</option>
                  
                  <option value="customer">Cliente</option>
                </select>
                <label className="form-label">Rol</label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Crear Usuario
              </button>
            </form>
          </div>

          <div className="col-md-5">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="img-fluid" alt="Usuario" />
          </div>
        </div>
      </div>
    </>
  );
}