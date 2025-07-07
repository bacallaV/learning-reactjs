import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoItemProps {
  label: string;
  completed: boolean;
  onCompleted: () => void;
  onRemove: () => void;
  onEdit: () => void;
}
export default function TodoItem({
  label,
  completed,
  onCompleted,
  onRemove,
  onEdit,
}: TodoItemProps) {
  return (
    <li className='ti-item'>
      <button className={`ti-complete-button ${completed && 'completed'}`} type='button' onClick={onCompleted}>
        <FontAwesomeIcon icon={completed ? faClose : faCheck} />
      </button>

      <p className={`ti-label ${completed && 'completed'}`}> {label} </p>

      <div className='ti-actions'>
        <button className='ti-edit-button' type='button' onClick={onEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>

        <button className='ti-remove-button' type='button' onClick={onRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  )
}
