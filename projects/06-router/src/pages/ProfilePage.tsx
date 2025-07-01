import { useParams } from "react-router-dom";

import { useAuth } from "../contexts/auth";
import { specialUsers } from "../data/users";

import type { User } from "../types/user";

export function ProfilePage() {
  const { username } = useParams();

  const foundUser = specialUsers.find((user) => user.username === username);

  return (
    <section>
      <h1>Perfil 🧑‍🦰</h1>

      <p>Esta es la página de perfil del usuario.</p>

      {foundUser ? (
        <ProfilePageContent user={foundUser} />
      ) : (
        <p>Usuario no encontrado :(</p>
      )}
    </section>
  )
}

type ProfilePageContentProps = {
  user: User;
}
export function ProfilePageContent(props: ProfilePageContentProps) {
  const { user: loggedUser } = useAuth();

  const isCurrentUser = loggedUser?.username === props.user.username;
  const canEditProfile = loggedUser?.role === 'admin' || isCurrentUser;

  return (
    <>
      {isCurrentUser ? (
        <>
          <p>
            Estás viendo tu perfil, <strong>{props.user.name}</strong> ({props.user.username}).
            <br />
            Actualmente tienes el rol de: <strong>{loggedUser.role}</strong>
          </p>
        </>
      ) : (
        <p>
          Este es el perfil de <strong>{props.user.name}</strong> ({props.user.username}).
        </p>
      )}

      {canEditProfile && (
        <button type="button">Editar perfil ✏️</button>
      )}
    </>
  );
}

