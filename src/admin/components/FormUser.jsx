import React from 'react'

export default function FormUser() {
  return (
    <>
             <div className="container-fluid">
  {/* Page Heading */}
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Crear Usuario</h1>
    <a href="listado-usuarios.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
      <i className="fas fa-list fa-sm text-white-50"></i> Listado
    </a>
  </div>

  {/* Content Row */}
  <div className="row">
    <div className="col-md-6">
      <form>

        {/* Nombre */}
        <div className="form-outline mb-4">
          <input type="text" id="nombre" className="form-control" />
          <label className="form-label" htmlFor="nombre">Nombre</label>
        </div>

        {/* Correo electrónico */}
        <div className="form-outline mb-4">
          <input type="email" id="correo" className="form-control" />
          <label className="form-label" htmlFor="correo">Correo Electrónico</label>
        </div>

        {/* Contraseña */}
        <div className="form-outline mb-4">
          <input type="password" id="password" className="form-control" />
          <label className="form-label" htmlFor="password">Contraseña</label>
        </div>

        {/* Rol */}
        <div className="form-outline mb-4">
          <select id="rol" className="form-select form-control">
            <option value="">Seleccionar un rol</option>
            <option value="admin">Administrador</option>
            <option value="vendedor">Vendedor</option>
            <option value="cliente">Cliente</option>
          </select>
          <label className="form-label" htmlFor="rol">Rol</label>
        </div>

        {/* Botón enviar */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Crear Usuario
        </button>
      </form>
    </div>

    {/* Imagen decorativa */}
    <div className="col-md-5">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="img-fluid" alt="Usuario" />
    </div>
  </div>
</div>


    </>
  )
}
