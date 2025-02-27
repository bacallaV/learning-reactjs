import React from 'react'

type ChildComponentProps = {
  render: (data: string[]) => React.JSX.Element,
}
export default function ChildComponent({ render }: ChildComponentProps) {
  const data = ['Banana 🍌', 'Apple 🍎', 'Orange 🍊'];

  return (
    <ul>
      {render(data)}
    </ul>
  )
}
