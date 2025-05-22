import React from 'react'

export default function Aside() {
  return (
    <>
      <aside className="col-md-3 my-3">
      {/* Aquí van filtros, categorías, etc */}
        <h5>Categorías</h5>
        <ul className="list-group">
          <li className="list-group-item">Crecimiento Personal</li>
          <li className="list-group-item">Ficción</li>
          <li className="list-group-item">No Ficción</li>
        </ul>
      </aside>
    </>
  )
}
