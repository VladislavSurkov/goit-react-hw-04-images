import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalViewer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeByEsc();
    }
      return;
    
  };

  render() {
    const { closeModal, modalImg, tags } = this.props;

    return createPortal(
      <Overlay onClick={closeModal}>
        <ModalViewer>
          <ModalImg src={modalImg} alt={tags} />
        </ModalViewer>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
