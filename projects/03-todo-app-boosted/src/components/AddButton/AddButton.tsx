import './AddButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faTimes } from '@fortawesome/free-solid-svg-icons';

type AddButtonProps = {
  isModalOpen: boolean;
  toggleModal: () => void;
}
export default function AddButton({ isModalOpen, toggleModal }: AddButtonProps) {
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
