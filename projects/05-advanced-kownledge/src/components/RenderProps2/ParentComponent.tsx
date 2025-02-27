import ChildComponent from './ChildComponent'

export default function ParentComponent() {
  return (
    ChildComponent({ render: (data) => (
      <>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </>
    )})
  )
}
