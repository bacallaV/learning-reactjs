import './TodoSkeleton.css'

export default function TodoSkeleton() {
  return (
    <li className='ti-item'>
      <div className={`ti-button`}>
      </div>

      {/* <div className={`ti-label`}></div> */}

      <div className='ti-button'>
      </div>
    </li>
  )
}
