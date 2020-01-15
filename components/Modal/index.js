import { useState } from "react";
import ReactDOM from 'react-dom';
import './style.scss';

function Modal(props) {
  const { show, closeModal } = props;

  if (typeof document  === 'undefined') {
      return null;
  }

  return ReactDOM.createPortal(
      (
        <div>
            <button onClick={closeModal}>X</button>
            <h1>Modal heading</h1>
            <p>This is modal content</p>
        </div>
      ), document.getElementById('modal-container')
  );
}

export default Modal;