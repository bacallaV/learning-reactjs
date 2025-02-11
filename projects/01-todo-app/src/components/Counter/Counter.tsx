import './Counter.css';

interface CounterProps {
  total: number;
  completed: number;
}

export default function Counter({ total, completed }: CounterProps) {
  return (
    <h1>
      Has completado {completed} de {total} TODOs
    </h1>
  )
}
