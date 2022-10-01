import React, { useEffect, useRef } from 'react';
import { ModalContainer, BigImg, ModalSubcontainer } from 'components/ui';
import PropTypes from 'prop-types';

const Modal = ({ src, onClose }) => {
  const onPressESCRef = useRef();
  useEffect(() => {
    if (onPressESCRef.current) {
      document.removeEventListener('keydown', onPressESCRef.current);
    }
    onPressESCRef.current = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', onPressESCRef.current);
    return () => {
      document.removeEventListener('keydown', onPressESCRef.current);
    };
  }, [onClose]);

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={onBackdropClick}>
      <ModalSubcontainer>
        <BigImg src={src} alt="Large img" />
      </ModalSubcontainer>
    </ModalContainer>
  );
};

export default Modal;

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

// -------------------------------------------------------------------------------------------------------------------------
// import React, { Component } from 'react';
// import { ModalContainer, BigImg, ModalSubcontainer } from 'components/ui';
// import PropTypes from 'prop-types';

// class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.onPressESC);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.onPressESC);
//   }

//   onPressESC = event => {
//     if (event.key === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   onBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <ModalContainer onClick={this.onBackdropClick}>
//         <ModalSubcontainer>
//           <BigImg src={this.props.src} alt="Large img" />
//         </ModalSubcontainer>
//       </ModalContainer>
//     );
//   }
// }

// export default Modal;

// Modal.propTypes = {
//   src: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
