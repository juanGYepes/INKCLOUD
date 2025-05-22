import React from 'react'

export default function Header() {
  return (
    <>
      <header className="bg-warning py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo fw-bold fs-3">INKCLOUD</div>

        <form className="flex-grow-1 mx-4">
          <div className="input-group">
            <input type="search" className="form-control" placeholder="Buscar productos" />
            <button className="btn btn-dark" type="submit">🔍</button>
          </div>
        </form>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link text-dark">👤</button>
          <button className="btn btn-link text-dark position-relative">
            🛒
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">0</span>
          </button>
          <span>$0</span>
        </div>
      </div>
    </header>
    </>
  )
}
