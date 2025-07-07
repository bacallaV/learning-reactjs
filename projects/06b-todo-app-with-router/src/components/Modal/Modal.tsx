import ReactDOM from "react-dom"

import './Modal.css'

type ModalProps = {
  children: React.ReactNode
}
export default function Modal({ children }: ModalProps) {
  return ReactDOM.createPortal(
    <div className="modal-container">
      {children}
    </div>,
    document.getElementById('modal-root') as Element,
  )
}
