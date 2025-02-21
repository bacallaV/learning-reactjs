import { JSX } from 'react'

import './TodoList.css'
import { Todo } from '@app/types/todo.type';

type TodoListProps = {
  status: 'initial' | 'loading' | 'failed' | 'success';
  totalTodos: number;
  searchedTodos: Todo[];
  searchText: string;
  onLoading: () => JSX.Element;
  onFailed: () => JSX.Element;
  onEmpty: () => JSX.Element;
  onEmptySearch: (searchText: string) => JSX.Element;
  children: (todo: Todo, index: number) => JSX.Element;
}
export default function TodoList({
  status,
  totalTodos,
  searchedTodos,
  searchText,
  onLoading,
  onFailed,
  onEmpty,
  onEmptySearch,
  children,
}: TodoListProps) {
  return (
    <ul className='todoList'>
      { status === 'loading' && onLoading() }

      { status === 'failed' && onFailed() }

      { (status === 'success' && totalTodos === 0) && onEmpty() }

      { (status === 'success' && searchedTodos.length === 0) && onEmptySearch(searchText) }

      {status === 'success' && searchedTodos.map(children)}
    </ul>
  )
}
