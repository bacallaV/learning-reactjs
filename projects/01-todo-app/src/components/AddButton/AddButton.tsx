import React from 'react'
import './AddButton.css'

import { TodoContext } from '../../core/TodoContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function AddButton() {
  const { toggleModal } = React.useContext(TodoContext);

  const [mode, setMode] = React.useState<'add' | 'close'>('close');

  const handleOnClick = () => {
    toggleModal();
    setMode(mode === 'add' ? 'close' : 'add');
  }

  return (
    <button className='addButton' type='button' onClick={handleOnClick}>
      {mode === 'close'
        ? (<FontAwesomeIcon icon={faAdd} width={52} />) :
        (<FontAwesomeIcon icon={faTimes} width={52} />)
      }
    </button>
  )
}
