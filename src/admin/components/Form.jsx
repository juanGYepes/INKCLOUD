import React from 'react'

export default function Form() {
  return (
    <>
            <div className="container-fluid">
  {/* Encabezado de página */}
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Registro de Libros</h1>
    <a href="listado-libros.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
      <i className="fas fa-list fa-sm text-white-50"></i> Listado
    </a>
  </div>

  {/* Contenido */}
  <div className="row">
    <div className="col-md-6">
      <form>

        {/* Título del libro */}
        <div className="form-outline mb-4">
          <input type="text" id="titulo-libro" className="form-control" />
          <label className="form-label" htmlFor="titulo-libro">Título</label>
        </div>

        {/* Autor */}
        <div className="form-outline mb-4">
          <input type="text" id="autor-libro" className="form-control" />
          <label className="form-label" htmlFor="autor-libro">Autor</label>
        </div>

        {/* Categoría o género */}
        <div className="form-outline mb-4">
          <select id="categoria-libro" className="form-select form-control">
            <option value="">Seleccionar género</option>
            <option value="novela">Novela</option>
            <option value="cuento">Cuento</option>
            <option value="poesia">Poesía</option>
            <option value="ensayo">Ensayo</option>
            <option value="drama">Drama</option>
            <option value="biografia">Biografía</option>
            <option value="fantasia">Fantasía</option>
            <option value="ciencia_ficcion">Ciencia Ficción</option>
            <option value="historia">Historia</option>
          </select>
          <label className="form-label" htmlFor="categoria-libro">Género</label>
        </div>

        {/* Precio */}
        <div className="form-outline mb-4">
          <input type="number" id="precio-libro" className="form-control" />
          <label className="form-label" htmlFor="precio-libro">Precio</label>
        </div>

        {/* Stock o cantidad */}
        <div className="form-outline mb-4">
          <input type="number" id="stock-libro" className="form-control" />
          <label className="form-label" htmlFor="stock-libro">Cantidad en inventario</label>
        </div>

        {/* Descripción */}
        <div className="form-outline mb-4">
          <textarea className="form-control" id="descripcion-libro" rows="4"></textarea>
          <label className="form-label" htmlFor="descripcion-libro">Descripción / Sinopsis</label>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Registrar Libro
        </button>
      </form>
    </div>

    {/* Imagen decorativa o portada */}
    <div className="col-md-5">
      <img src="https://m.media-amazon.com/images/I/61XV8PihCwL._SY250_.jpg" className="img-fluid" alt="Portada del libro" />
    </div>
  </div>
</div>


    </>
  )
}
