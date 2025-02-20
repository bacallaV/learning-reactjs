import React from 'react'

import './TodoHeader.css';

type TodoHeaderProps = {
  children: React.ReactNode;
}
export default function TodoHeader({ children }: TodoHeaderProps) {
  return (
    <section className='todo-header'>
      {children}
    </section>
  )
}
