import React from "react";

import { useAuth } from "../contexts/auth";

export function LogoutPage() {
  const { logout } = useAuth();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    logout();
  }

  return (
    <section>
      <h1>Cerrar sesión</h1>

      <form onSubmit={handleSubmit}>
        <label>¿Estás seguro de querer cerrar sesión?</label>

        <button type="submit">
          Cerrar sesión
        </button>
      </form>
    </section>
  )
}

