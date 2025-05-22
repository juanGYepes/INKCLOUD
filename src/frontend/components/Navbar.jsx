import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="bg-warning border-top border-bottom">
      <div className="text-start container">
        <ul className="nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Libros</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Ficción</a></li>
              <li><a className="dropdown-item" href="#">No Ficción</a></li>
            </ul>
          </li>
          {/* Más categorías aquí */}
          <li className="nav-item"><a className="nav-link fw-bold" href="#">Membresías Praim</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Bono de Regalo</a></li>
          <li className="nav-item"><a className="nav-link fw-bold" href="#">InkCloud</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}
