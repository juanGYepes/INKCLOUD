import React from 'react'

export default function ListReport() {
  return (
    <>
       <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Reportes</h1>
                        <a href="crear-pro.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <i className="fas fa-plus fa-sm text-white-50"></i> Crear Reportes</a>
                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">
                         {/* <!--================== tabla aqui ===========================--> */}
                         <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
                            <span className="input-group-text bg-white border-0 pe-1" id="basic-addon1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                              </svg>
                            </span>
                            <input type="search" className="form-control hide-focus border-0" placeholder="Buscar Reportes" aria-label="Username" aria-describedby="basic-addon1"/>
                          </div> 
                         <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                              <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                              </tr>
                            </thead>
                            <tbody>
                              
                            </tbody>
                          </table>
                    </div>

                    {/* <!-- Content Row --> */}
                </div>
    </>
  )
} 
