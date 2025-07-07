import './TodoSkeleton.css'

export default function TodoSkeleton() {
  return (
    <li className='tis-item'>
      <div className={`tis-button`}>
      </div>

      {/* <div className={`tis-label`}></div> */}

      <div className='tis-button-container'>
        <div className='tis-button'>
        </div>

        <div className='tis-button'>
        </div>
      </div>
    </li>
  )
}
