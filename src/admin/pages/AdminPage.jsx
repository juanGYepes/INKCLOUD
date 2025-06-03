import { useAuth } from "../../context/AuthContext"

export default function AdminPage() {
  let { user } = useAuth();

  return (
    <div>
      <h1>Bienvenido al panel de administración</h1>
      <p>{user.username}</p>

      {/* Lo que va a aparecer en el admin */}
    </div>
  )
}
