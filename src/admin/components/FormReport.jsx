import React from 'react'

export default function FormReport() {
  return (
    <>
             <div className="container-fluid">
  {/* Page Heading */}
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Crear Reporte</h1>
    <a href="listado-reportes.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
      <i className="fas fa-list fa-sm text-white-50"></i> Listado
    </a>
  </div>

  {/* Content Row */}
  <div className="row">
    <div className="col-md-6">
      <form>

        {/* Tipo de reporte */}
        <div className="form-outline mb-4">
          <select id="tipo-reporte" className="form-select form-control">
            <option value="">Seleccionar tipo de reporte</option>
            <option value="Incidente">Incidente</option>
            <option value="Revisión">Revisión</option>
            <option value="Sugerencia">Sugerencia</option>
            <option value="Queja">Queja</option>
          </select>
          <label className="form-label" htmlFor="tipo-reporte">Tipo de Reporte</label>
        </div>

        {/* Fecha del reporte */}
        <div className="form-outline mb-4">
          <input type="date" id="fecha" className="form-control" />
          <label className="form-label" htmlFor="fecha">Fecha</label>
        </div>

        {/* Persona o departamento responsable */}
        <div className="form-outline mb-4">
          <input type="text" id="responsable" className="form-control" />
          <label className="form-label" htmlFor="responsable">Responsable</label>
        </div>

        {/* Descripción del reporte */}
        <div className="form-outline mb-4">
          <textarea className="form-control" id="descripcion-reporte" rows="4"></textarea>
          <label className="form-label" htmlFor="descripcion-reporte">Descripción</label>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Crear Reporte
        </button>
      </form>
    </div>

    {/* Imagen decorativa */}
    <div className="col-md-5">
      <img src="https://cdn-icons-png.flaticon.com/512/6331/6331716.png" className="img-fluid" alt="Reporte" />
    </div>
  </div>
</div>


    </>
  )
}
