import React from 'react'

import './AddTodoForm.css'

type AddTodoFormProps = {
  content?: string;
  onSubmit: (content: string) => void;
  onCancel: () => void;
}
export default function AddTodoForm(props: AddTodoFormProps) {
  const [content, setContent] = React.useState(props.content ?? '');

  function handleTextareaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    props.onSubmit(content);
  }

  return (
    <div className='atf-container'>
      <h2 className='atf-title'> Añadir nueva tarea </h2>

      <form className='atf-form' onSubmit={handleSubmit}>
        <textarea
          className='atf-textarea'
          placeholder='Cortar cebolla para el amuerzo'
          value={content}
          onChange={handleTextareaChange}
          required
        />

        <div className='actions'>
          <button
            type='button'
            className='atf-button cancel'
            onClick={props.onCancel}
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
