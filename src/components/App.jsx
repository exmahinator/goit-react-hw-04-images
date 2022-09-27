import React from 'react';
import { Component } from 'react';
// import axios from 'axios';
import Searchbar from './Searchbar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import { Section } from './ui';

class App extends Component {
  state = {
    pageNumber: 1,
    name: 'cat',
  };

  render() {
    const { pageNumber, name } = this.state;

    return (
      <Section>
        <Searchbar />
        <Loader />
        <ImageGallery pageNumber={pageNumber} name={name} />
      </Section>
    );
  }
}

export default App;
