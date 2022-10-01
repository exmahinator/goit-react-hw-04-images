import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import { Section } from './ui';

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [name, setName] = useState('');
  const [largeImgSrc, setLargeImgSrc] = useState('');

  const handleSubmit = (name, reset) => {
    setName(name);
    setPageNumber(1);
    reset();
  };

  const handleClick = () => {
    setPageNumber(pageNumber + 1);
  };

  const openModal = url => {
    setLargeImgSrc(url);
  };

  const closeModal = () => {
    setLargeImgSrc('');
  };

  return (
    <Section>
      <Searchbar resultSubmit={handleSubmit} />
      {largeImgSrc && <Modal src={largeImgSrc} onClose={closeModal} />}
      <ImageGallery
        pageNumber={pageNumber}
        name={name}
        handleClick={handleClick}
        openModal={openModal}
      />
    </Section>
  );
};

export default App;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { Component } from 'react';
// import Searchbar from './Searchbar';
// import ImageGallery from './ImageGallery';
// import Modal from './Modal';
// import { Section } from './ui';

// class App extends Component {
//   state = {
//     pageNumber: 1,
//     name: '',
//     largeImgSrc: '',
//   };

//   handleSubmit = (name, reset) => {
//     this.setState({ name, pageNumber: 1 });
//     reset();
//   };

//   handleClick = () => {
//     this.setState(prevState => {
//       return { pageNumber: prevState.pageNumber + 1 };
//     });
//   };

//   openModal = url => {
//     this.setState({ largeImgSrc: url });
//   };

//   closeModal = () => {
//     this.setState({ largeImgSrc: '' });
//   };

//   render() {
//     const { pageNumber, name, largeImgSrc } = this.state;

//     return (
//       <Section>
//         <Searchbar handleSubmit={this.handleSubmit} />
//         {largeImgSrc && <Modal src={largeImgSrc} onClose={this.closeModal} />}
//         <ImageGallery
//           pageNumber={pageNumber}
//           name={name}
//           handleClick={this.handleClick}
//           openModal={this.openModal}
//         />
//       </Section>
//     );
//   }
// }

// export default App;
