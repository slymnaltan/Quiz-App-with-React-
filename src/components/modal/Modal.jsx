import React from 'react'
import './modal.css'
function Modal({score}) {
  return (
    <div>
        <div className='modal-title'>Score : {score} Right Answer </div>
        <div onClick={()=>window.location="/"} className="modal-button">Start Again</div>
    </div>
  )
}

export default Modal