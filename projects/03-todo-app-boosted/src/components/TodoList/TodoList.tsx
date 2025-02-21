import { JSX } from 'react'

import './TodoList.css'
import { Todo } from '@app/types/todo.type';

type TodoListProps = {
  status: 'initial' | 'loading' | 'failed' | 'success';
  todos: Todo[];
  onLoading: () => JSX.Element;
  onFailed: () => JSX.Element;
  onEmpty: () => JSX.Element;
  onSuccess: (todo: Todo, index: number) => JSX.Element;
}
export default function TodoList({
  status,
  todos,
  onLoading,
  onFailed,
  onEmpty,
  onSuccess
}: TodoListProps) {
  return (
    <ul className='todoList'>
      { status === 'loading' && onLoading() }

      { status === 'failed' && onFailed() }

      { (status === 'success' && todos.length === 0) && onEmpty() }

      {status === 'success' && todos.map(onSuccess)}
    </ul>
  )
}
