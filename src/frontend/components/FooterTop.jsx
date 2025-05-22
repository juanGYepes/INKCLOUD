import React from 'react'

export default function FooterTop() {
  return (
    <div className="container py-5 mt-5 border-top">
      <div className="row text-start">
        {/* Logo y redes */}
        <div className="col-md-3 mb-4">
          <img src="https://i.ibb.co/gPMMZr2/bukzlogo.png" alt="Logo Bukz" width="80" className="mb-3" />
          <div>
            <i className="bi bi-facebook me-2"></i>
            <i className="bi bi-twitter me-2"></i>
            <i className="bi bi-instagram me-2"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>

        {/* Políticas */}
        <div className="col-md-3 mb-4">
          <h6>Políticas</h6>
          <ul className="list-unstyled">
            <li>Políticas de Envío</li>
            <li>Cambios y Devoluciones</li>
            <li>Protección de Datos</li>
            <li>Términos de Servicio</li>
          </ul>
        </div>

        {/* Librerías */}
        <div className="col-md-3 mb-4">
          <h6>Librerías</h6>
          <p className="mb-1"><strong>Las Lomas:</strong> Cra. 30 #10-335</p>
          <p className="mb-1"><strong>Bogotá:</strong> Cl. 109 #18-39</p>
          <p className="mb-1"><strong>Viva Envigado:</strong> Cra. 48 #32B Sur-139</p>
          <p><strong>Museo Antioquia:</strong> Cl. 52 #52-43</p>
        </div>

        {/* Horarios */}
        <div className="col-md-3 mb-4">
          <h6>Horarios</h6>
          <p className="mb-1"><strong>Las Lomas:</strong> L-S 10am-8pm / D 9am-5pm</p>
          <p className="mb-1"><strong>Bogotá:</strong> L-V 10am-7pm / S-D 9am-5pm</p>
          <p><strong>Envigado:</strong> L-D 10am-9pm</p>
        </div>
      </div>
    </div>
  )
}
