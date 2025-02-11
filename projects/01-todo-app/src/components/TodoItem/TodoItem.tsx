import React from 'react'
import './TodoItem.css'

interface TodoItemProps {
  label: string;
  completed: boolean;
  onCompleted: () => void;
  onRemove: () => void;
}
export default function TodoItem({
  label,
  completed,
  onCompleted,
  onRemove,
}: TodoItemProps) {
  return (
    <li className='ti-item'>
      <button className='ti-complete-button' type='button' onClick={onCompleted}>V</button>

      <p className={`ti-label ${completed && 'ti-label-completed'}`}> {label} </p>

      <button className='ti-remove-button' type='button' onClick={onRemove}>x</button>
    </li>
  )
}
