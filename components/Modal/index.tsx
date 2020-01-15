import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import ButtonPrimary from '../ButtonPrimary';

interface Props {
  closeModal : () => any
  children : React.ReactNode
}

function Modal(props: Props) {
  const { closeModal, children } = props;

  if (typeof document  === 'undefined') {
      return null;
  }

  useEffect(() => {
    //on mount
    document.body.classList.add('no-scroll')
    return () => {
      // on unmount
      document.body.classList.remove('no-scroll')
    }
  } , []) 

  return ReactDOM.createPortal(
      (
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}} className="fixed top-0 z-30 flex content-center justify-center bg-dusk h-screen w-screen overflow-auto">
        <div className="lg:w-1/3 w-full mx-4 h-auto bg-chalk flex flex-col items-center self-center rounded-lg">
        <div className="top-0 w-full flex justify-end">
          <div className="pt-4 pr-4">
            <button onClick={closeModal}>
                <svg className="h-8 w-8 fill-current text-dusk hover:text-night" role="button" width="24" height="24" viewBox="0 0 24 24"><title>Close</title><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </button>
         </div>
        </div>
            {children}
            <div className="h-32 pb-8 w-full bottom-0 flex h-4 justify-center items-end">
              <ButtonPrimary>Attend</ButtonPrimary>
            </div>
        </div>
        </div>
      ), document.getElementById('modal-container')!
  );
}

export default Modal;