import React from 'react'

export function ParentComponent() {
  const [isToggled, setIsToggled] = React.useState(false);

  function handleToggle(value: boolean) {
    setIsToggled(value);
  }

  return (
    <div>
      <p>Valor toggle: {isToggled ? 'ON' : 'OFF'}</p>
      <Toggle isToggled={isToggled} onToggle={handleToggle} />
    </div>
  )
}

type ToggleProps = {
  isToggled?: boolean,
  onToggle?: (value: boolean) => void,
}
function Toggle({ isToggled, onToggle }: ToggleProps) {
  const [value, setValue] = React.useState(isToggled);

  function handleToggle() {
    setValue(!value);

    if (onToggle) {
      onToggle(!value);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        {value ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}
