import { useAuth } from "../contexts/auth";

export function ProfilePage() {
  const { user } = useAuth();

  return (
    <section>
      <h1>Perfil</h1>

      <p>Esta es la página de perfil del usuario.</p>

      {
        user && (
          <p>{`Bienvenido :) ${user.username}`}</p>
        )
      }
    </section>
  )
}

