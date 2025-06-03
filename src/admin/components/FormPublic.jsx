import React from 'react'

export default function FormPublic() {
  return (
    <>
            <div className="container-fluid">
  {/* Page Heading */}
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Crear Publicación</h1>
    <a href="listado-publicaciones.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
      <i className="fas fa-list fa-sm text-white-50"></i> Listado
    </a>
  </div>

  {/* Content Row */}
  <div className="row">
    <div className="col-md-6">
      <form>

        {/* Título del libro */}
        <div className="form-outline mb-4">
          <input type="text" id="titulo" className="form-control" />
          <label className="form-label" htmlFor="titulo">Título</label>
        </div>

        {/* Autor */}
        <div className="form-outline mb-4">
          <input type="text" id="autor" className="form-control" />
          <label className="form-label" htmlFor="autor">Autor</label>
        </div>

        {/* Género */}
        <div className="form-outline mb-4">
          <select id="genero" className="form-select form-control">
            <option value="">Seleccionar un género</option>
            <option value="Ficción">Ficción</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
            <option value="Aventura">Aventura</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="Biografía">Biografía</option>
            <option value="Infantil">Infantil</option>
            <option value="Educativo">Educativo</option>
          </select>
          <label className="form-label" htmlFor="genero">Género</label>
        </div>

        {/* Año de publicación */}
        <div className="form-outline mb-4">
          <input type="number" id="anio" className="form-control" />
          <label className="form-label" htmlFor="anio">Año de Publicación</label>
        </div>

        {/* Descripción */}
        <div className="form-outline mb-4">
          <textarea className="form-control" id="descripcion" rows="4"></textarea>
          <label className="form-label" htmlFor="descripcion">Descripción</label>
        </div>

        {/* Botón enviar */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Crear Publicación
        </button>
      </form>
    </div>

    {/* Imagen decorativa */}
    <div className="col-md-5">
      <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" className="img-fluid" alt="Libro" />
    </div>
  </div>
</div>


    </>
  )
}
