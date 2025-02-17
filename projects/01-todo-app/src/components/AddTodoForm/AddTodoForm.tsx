import React from 'react'

import './AddTodoForm.css'
import { TodoContext } from '../../core/TodoContext';

export default function AddTodoForm() {
  const { toggleModal, addTodo } = React.useContext(TodoContext);

  const [todoName, setTodoName] = React.useState('');

  function handleTextareaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTodoName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addTodo({
      label: todoName,
      completed: false,
    });
    toggleModal();
  }

  return (
    <div className='atf-container'>
      <h2 className='atf-title'> Añadir nueva tarea </h2>

      <form className='atf-form' onSubmit={handleSubmit}>
        <textarea
          className='atf-textarea'
          placeholder='Cortar cebolla para el amuerzo'
          value={todoName}
          onChange={handleTextareaChange}
        />

        <div className='actions'>
          <button
            type='button'
            className='atf-button cancel'
            onClick={toggleModal}
          >
            Cancelar
          </button>

          <button
            type='submit'
            className='atf-button add'
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  )
}
