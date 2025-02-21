import './Counter.css';

type CounterProps = {
  completed: number;
  total: number;
  isLoading?: boolean;
};
export default function Counter({
  completed,
  total,
  isLoading,
}: CounterProps) {

  return (
    <h1 className={`counter ${isLoading ? 'loading' : ''}`}>
      {completed === total ? '🎉' : '🤔'}
      Has completado {completed} de {total} TODOs
    </h1>
  )
}
