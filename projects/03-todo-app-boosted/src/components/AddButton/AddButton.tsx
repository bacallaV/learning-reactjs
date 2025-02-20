import React from 'react'
import './AddButton.css'

import { TodoContext } from '@app/core/TodoContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function AddButton() {
  const { isModalOpen, toggleModal } = React.useContext(TodoContext);

  const handleOnClick = () => {
    toggleModal();
  }

  return (
    <button className='addButton' type='button' onClick={handleOnClick}>
      { !isModalOpen
        ? (<FontAwesomeIcon icon={faAdd} width={52} />) :
        (<FontAwesomeIcon icon={faTimes} width={52} />)
      }
    </button>
  )
}
