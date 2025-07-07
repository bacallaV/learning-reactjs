import React from 'react'

import './TodoHeader.css';

type TodoHeaderProps = {
  isLoading: boolean;
  children: React.ReactNode;
}
export default function TodoHeader({ isLoading, children }: TodoHeaderProps) {
  return (
    <section className='todo-header'>
      {
        React.Children
          .toArray(children)
          .map(
            (child) => React.cloneElement(child as React.ReactElement<{isLoading: boolean}>, { isLoading })
          )
      }
    </section>
  )
}
