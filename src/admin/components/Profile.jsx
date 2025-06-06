import { useAuth } from "../../context/AuthContext"
import { useState, useEffect } from "react"

export default function PerfilUsuario() {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    nomUsuario: "",
    dirUsuario: "",
    celular: "",
    rol: "",
    correo: "",
    contrasena: "",  // agregado
    activo: true     // agregado
  })
  const [loading, setLoading] = useState(true)
  const [mensaje, setMensaje] = useState("")

  // Obtener los datos del usuario desde la API
  useEffect(() => {
    fetch(`http://localhost:8080/usuarios/${user.idUsuario}`)
      .then(res => res.json())
      .then(data => {
        setFormData({
          nomUsuario: data.nomUsuario || "",
          dirUsuario: data.dirUsuario || "",
          celular: data.celular || "",
          rol: data.rol || "",
          correo: data.correo || "",
          contrasena: data.contrasena || "",  // necesario para que el backend no falle
          activo: data.activo !== undefined ? data.activo : true // evitar errores
        })
        setLoading(false)
      })
      .catch(err => {
        console.error("Error al cargar perfil:", err)
        setMensaje("Error al cargar los datos del perfil")
        setLoading(false)
      })
  }, [user.idUsuario])

  // Manejar los cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  // Enviar los datos actualizados
  const handleSubmit = (e) => {
    e.preventDefault()

    const datosActualizados = {
      ...formData
    }

    fetch(`http://localhost:8080/usuarios/${user.idUsuario}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosActualizados)
    })
      .then(res => {
        if (res.ok) {
          setMensaje("Datos actualizados correctamente")
        } else {
          setMensaje("Error al actualizar los datos")
        }
      })
      .catch(err => {
        console.error("Error al actualizar:", err)
        setMensaje("Error al conectar con el servidor")
      })
  }

  return (
    <div className="container mt-4">
      <h2>Mi Perfil</h2>

      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              name="nomUsuario"
              value={formData.nomUsuario}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Dirección:</label>
            <input
              type="text"
              className="form-control"
              name="dirUsuario"
              value={formData.dirUsuario}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Celular:</label>
            <input
              type="text"
              className="form-control"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Rol:</label>
            <input
              type="text"
              className="form-control"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico:</label>
            <input
              type="email"
              className="form-control"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              className="form-control"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="activoCheck"
              name="activo"
              checked={formData.activo}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="activoCheck">
              Usuario activo
            </label>
          </div>

          <button type="submit" className="btn btn-primary mt-3">Guardar cambios</button>
        </form>
      )}

      {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
    </div>
  )
}
