import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export default function PerfilUsuario() {
  const { user } = useAuth();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos actualizados:", { username, email });
    // Aquí puedes hacer un fetch para actualizar en tu backend
  };

  return (
    <div className="container mt-4">
      <h2>Mi Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Guardar cambios</button>
      </form>
    </div>
  );
}

