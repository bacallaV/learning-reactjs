import React from 'react'

export default class ClassState extends React.Component {
  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>

        <p>Por favor, escribe el código de seguridad 🔒.</p>

        <input type="text" placeholder="código de seguridad" />
        <button type="button"> Comprobar </button>
      </div>
    )
  }
}
