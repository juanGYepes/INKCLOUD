import React from 'react'

export default function FormPermis() {
  return (
    <>
            <div className="container-fluid">
  {/* Encabezado de página */}
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Asignar Permisos</h1>
    <a href="listado-permisos.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
      <i className="fas fa-list fa-sm text-white-50"></i> Listado
    </a>
  </div>

  {/* Contenido */}
  <div className="row">
    <div className="col-md-6">
      <form>

        {/* Seleccionar usuario */}
        <div className="form-outline mb-4">
          <select id="usuario-select" className="form-select form-control">
            <option value="">Seleccionar usuario</option>
            <option value="usuario1">Juan Pérez</option>
            <option value="usuario2">María Gómez</option>
            <option value="usuario3">Carlos Díaz</option>
          </select>
          <label className="form-label" htmlFor="usuario-select">Usuario</label>
        </div>

        {/* Seleccionar rol */}
        <div className="form-outline mb-4">
          <select id="rol-select" className="form-select form-control">
            <option value="">Seleccionar rol</option>
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
            <option value="viewer">Lector</option>
          </select>
          <label className="form-label" htmlFor="rol-select">Rol</label>
        </div>

        {/* Fecha de asignación */}
        <div className="form-outline mb-4">
          <input type="date" id="fecha-asignacion" className="form-control" />
          <label className="form-label" htmlFor="fecha-asignacion">Fecha de asignación</label>
        </div>

        {/* Descripción de permisos */}
        <div className="form-outline mb-4">
          <textarea className="form-control" id="descripcion-permiso" rows="4"></textarea>
          <label className="form-label" htmlFor="descripcion-permiso">Descripción / Justificación</label>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Asignar Permiso
        </button>
      </form>
    </div>

    {/* Imagen decorativa */}
    <div className="col-md-5">
      <img src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png" className="img-fluid" alt="Permisos" />
    </div>
  </div>
</div>


    </>
  )
}
