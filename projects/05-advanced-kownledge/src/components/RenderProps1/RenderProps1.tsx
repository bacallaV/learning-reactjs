import React from 'react'

export function ParentComponent() {
  return (
    <ChildComponent render={(name) => <div>Hello {name}</div>} />
  )
}

type ChildComponentProps = {
  render: (name: string) => React.JSX.Element,
}
export default function ChildComponent({ render }: ChildComponentProps) {
  const name = 'John Doe';

  return (
    <div>
      {render(name)}
    </div>
  )
}
