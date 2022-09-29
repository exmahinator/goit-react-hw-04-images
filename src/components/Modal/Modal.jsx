import React, { Component } from 'react';
import { ModalContainer, BigImg } from 'components/ui';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onPressESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onPressESC);
  }

  onPressESC = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <ModalContainer onClick={this.onBackdropClick}>
        <BigImg src={this.props.src} alt="Large img" />
      </ModalContainer>
    );
  }
}

export default Modal;

Modal.propTypes = {
  src: PropTypes.string.isRequired,
};
