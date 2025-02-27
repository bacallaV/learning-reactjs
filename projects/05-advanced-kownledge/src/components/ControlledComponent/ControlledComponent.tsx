import React from 'react'

export function ControlledInput() {
  const [value, setValue] = React.useState('');

  function onChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" name="cart" id="cart" value={value} onChange={onChangeValue} placeholder='Ingresa tu cupón' />
      <p>Cupón ingresado: {value}</p>
    </div>
  )
}
