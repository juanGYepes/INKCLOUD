import { useAuth } from "../../context/AuthContext"

export default function CustomerPage() {
  let { user } = useAuth();

  return (
    <div>
      <h1>Bienvenido al panel de clientes</h1>
      <p>{user.username}</p>

      {/* Lo que va a aparecer en el panel de clientes */}
    </div>
  )
}
