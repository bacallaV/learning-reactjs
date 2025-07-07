import './AddButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

type AddButtonProps = {
  onClick?: () => void;
}
export default function AddButton(props: AddButtonProps) {
  return (
    <button className='addButton' type='button' onClick={props.onClick}>
      <FontAwesomeIcon icon={faAdd} width={52} />
    </button>
  )
}
