import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/auth";

export function LoginPage() {
  const { user } = useAuth();

  const [formData, setFormData] = React.useState({
    username: '',
  });

  const { login } = useAuth();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    login(formData.username);
  }

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      [event.target.name as keyof typeof formData]: event.target.value,
    });
  }

  if (user) {
    return (
      <Navigate to="/profile" />
    )
  }

  return (
    <section>
      <h1>Iniciar sesión</h1>

      <form onSubmit={handleSubmit}>
        <label>Nombre de usuario:</label>
        <input type="text" name="username" required onChange={handleFormChange} />

        <button type="submit">
          Iniciar sesión
        </button>
      </form>
    </section>
  )
}

