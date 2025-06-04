import React from 'react'

export default function Aside() {
  return (
    <>
      <aside className="col-md-3 my-3">
      {/* Aquí van filtros, categorías, etc */}
        <h5>RECOMENDADOS DE LA SEMANA</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Título:</strong><br />
            <strong>Author:</strong>
          </li>
          <li className="list-group-item">
            <strong>Título:</strong><br />
            <strong>Author:</strong>
          </li>
          <li className="list-group-item">
            <strong>Título:</strong><br />
            <strong>Author:</strong>
          </li>
          <li className="list-group-item">
            <strong>Título:</strong><br />
            <strong>Author:</strong>
          </li>
          <li className="list-group-item">
            <strong>Título:</strong><br />
            <strong>Author:</strong>
          </li>
          
        </ul>
      </aside>
    </>
  )
}
