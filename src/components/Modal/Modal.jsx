import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalViewer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeByEsc, closeModal, modalImg, tags }) => {
  useEffect(() => {
    const onCloseByEsc = e => {
      if (e.code === 'Escape') {
        closeByEsc();
      }
      return;
    };

    window.addEventListener('keydown', onCloseByEsc);

    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [closeByEsc]);

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalViewer>
        <ModalImg src={modalImg} alt={tags} />
      </ModalViewer>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeByEsc: PropTypes.func.isRequired,
};
