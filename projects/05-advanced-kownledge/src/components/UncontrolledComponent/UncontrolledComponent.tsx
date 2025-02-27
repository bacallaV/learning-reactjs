import React from 'react'

export function UncontrolledInput() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function onAddToCart() {
    alert(inputRef.current?.value);
  }

  return (
    <div>
      <input type="text" name="cart" id="cart" placeholder='Ingresa tu producto Ej. Manzana' ref={inputRef} />
      <button type="button" onClick={onAddToCart}>Agregar al carrito</button>
    </div>
  )
}
