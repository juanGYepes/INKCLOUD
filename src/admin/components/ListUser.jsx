import React, { useEffect, useState } from 'react'

// Componente principal
export default function ListUser() {
  // Estado para guardar todos los usuarios
  const [usuarios, setUsuarios] = useState([])

  // Estado para saber cuál usuario está siendo editado (por su ID)
  const [editandoId, setEditandoId] = useState(null)

  // Estado para guardar temporalmente los datos que se están editando
  const [formData, setFormData] = useState({})

  // useEffect para cargar los usuarios al inicio
  useEffect(() => {
    fetch("http://localhost:8080/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data)) // Guardamos la lista de usuarios
      .catch(error => console.error("Error al obtener usuarios:", error))
  }, [])

  // Cuando se hace clic en "Editar", se guarda el ID que se está editando
  // y se cargan sus datos en formData para poder modificarlos
  const handleEditarClick = (usuario) => {
    setEditandoId(usuario.idUsuario)
    setFormData({ ...usuario }) // Copia del usuario para editar sin afectar el original hasta guardar
  }

  // Si el usuario cancela la edición
  const handleCancelar = () => {
    setEditandoId(null) // Quitamos modo edición
    setFormData({})     // Limpiamos los datos del formulario
  }

  // Maneja el cambio en cualquier input editable
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value })) // Actualizamos el formData
  }

  // Al hacer clic en "Guardar", se envía la info al backend (PUT)
  const handleGuardar = () => {
    fetch(`http://localhost:8080/usuarios/${editandoId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          // Si fue exitoso, actualizamos el usuario en la lista
          setUsuarios(prev =>
            prev.map(u => (u.idUsuario === editandoId ? formData : u))
          )
          setEditandoId(null)  // Salimos del modo edición
          setFormData({})      // Limpiamos el form
        } else {
          alert("Error al actualizar el usuario")
        }
      })
      .catch(err => console.error("Error en la actualización:", err))
  }

  // Función para eliminar un usuario
  const handleEliminar = (id) => {
    // Confirmación antes de eliminar
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return

    fetch(`http://localhost:8080/usuarios/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          // Eliminamos el usuario del estado
          setUsuarios(usuarios.filter(u => u.idUsuario !== id))
        } else {
          alert("Error al eliminar el usuario")
        }
      })
      .catch(err => console.error("Error al eliminar:", err))
  }

  // Render de la tabla con usuarios
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4">Usuarios</h1>

      <table className="table align-middle bg-white">
        <thead className="bg-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Celular</th>
            <th>Rol</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(user => (
            <tr key={user.idUsuario}>
              <td>{user.idUsuario}</td>

              {editandoId === user.idUsuario ? (
                // Si el usuario está en modo edición, mostramos inputs para modificar
                <>
                  <td><input type="text" name="nomUsuario" value={formData.nomUsuario} onChange={handleInputChange} className="form-control" /></td>
                  <td><input type="text" name="dirUsuario" value={formData.dirUsuario} onChange={handleInputChange} className="form-control" /></td>
                  <td><input type="text" name="celular" value={formData.celular} onChange={handleInputChange} className="form-control" /></td>
                  <td><input type="text" name="rol" value={formData.rol} onChange={handleInputChange} className="form-control" /></td>
                  <td><input type="email" name="correo" value={formData.correo} onChange={handleInputChange} className="form-control" /></td>
                  <td>
                    {/* Botón para guardar cambios */}
                    <button className="btn btn-success btn-sm me-1" onClick={handleGuardar}>
                      <i className="bi bi-check-lg"></i>
                    </button>
                    {/* Botón para cancelar la edición */}
                    <button className="btn btn-secondary btn-sm" onClick={handleCancelar}>
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </td>
                </>
              ) : (
                // Si no está en modo edición, mostramos los datos normales
                <>
                  <td>{user.nomUsuario}</td>
                  <td>{user.dirUsuario}</td>
                  <td>{user.celular}</td>
                  <td>{user.rol}</td>
                  <td>{user.correo}</td>
                  <td>
                    {/* Botón para entrar en modo edición */}
                    <button className="btn btn-warning btn-sm me-1" onClick={() => handleEditarClick(user)} title="Editar">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    {/* Botón para eliminar usuario */}
                    <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(user.idUsuario)} title="Eliminar">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
