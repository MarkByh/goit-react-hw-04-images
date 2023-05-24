import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import style from './modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKey = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.modal}>{children}</div>
    </div>,
    modalRoot
  );
}

// import { createPortal } from 'react-dom';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';

// // import { Overlay, ModalWindow } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

// export function Modal({ onClose, children }) {
//   useEffect(() => {
//     const handleKeyDown = e => {
//       if (e.code === 'Escape') {
//         onClose();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   const handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       onClose();
//     }
//   };

//   return createPortal(
//     <div className={style.overlay} onClick={handleBackdropClick}>
//       <div className={style.modal}>{children}</div>
//     </div>,
//     modalRoot
//   );
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };
