import React from 'react'
import { useState } from 'react'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-warning border-top border-bottom">
      <div className="text-start container">
        <ul className="nav">
          <a className="nav-item dropdown">
            <button onClick={()=>setIsOpen(!isOpen)}
             className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Libros</button>
            {
              isOpen && <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Ficción</a></li>
              <li><a className="dropdown-item" href="#">No Ficción</a></li>
            </ul>
            }
          </a>
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
