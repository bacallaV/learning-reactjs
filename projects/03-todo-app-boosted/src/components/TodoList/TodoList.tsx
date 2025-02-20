import React from 'react'

import './TodoList.css'

type TodoListProps = {
  children: React.ReactNode;
}
export default function TodoList({ children }: TodoListProps) {
  return (
    <ul className='todoList'>
      {children}
    </ul>
  )
}
