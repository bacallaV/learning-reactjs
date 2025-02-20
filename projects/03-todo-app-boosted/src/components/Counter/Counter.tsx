import './Counter.css';

type CounterProps = {
  completed: number;
  total: number;
};
export default function Counter({
  completed,
  total,
}: CounterProps) {

  return (
    <h1>
      {completed === total ? '🎉' : '🤔'}
      Has completado {completed} de {total} TODOs
    </h1>
  )
}
