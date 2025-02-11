import React from 'react'
import './TodoItem.css'

export default function TodoItem() {
  return (
    <li className='ti-item'>
      <button className='ti-complete-button'>V</button>
      <p className='ti-label'>Tarea 1</p>
      <button className='ti-remove-button'>x</button>
    </li>
  )
}
