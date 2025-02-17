import { useContext } from 'react';

import './Counter.css';

import { TodoContext } from '../../core/TodoContext';

export default function Counter() {
  const { todos } = useContext(TodoContext);

  const completed = todos.filter(todo => todo.completed).length;
  const total = todos.length;

  return (
    <h1>
      {completed === total ? '🎉' : '🤔'}
      Has completado {completed} de {total} TODOs
    </h1>
  )
}
