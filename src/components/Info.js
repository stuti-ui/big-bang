import React from 'react'

const Info = props => { 
    return (
        <div className="modal">
        <div className="modal-body">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="modal-content">{props.content}</div>
        </div>
      </div>
    )
}

export default Info


