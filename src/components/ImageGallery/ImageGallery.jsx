import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'components/ui';
import ImageGalleryItem from '../ImageGalleryItem';

// У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY =
  '&key=29649041-262fdf0daa2a4569f2631b8dd&image_type=photo&orientation=horizontal&per_page=12';

const axiosSearch = async (name, pageNumber) => {
  try {
    const data = await axios.get(`?q=${name}&page=${pageNumber}${KEY}`);
    return data.data.hits;
  } catch (error) {
    return alert(error);
  }
};

class ImageGallery extends Component {
  state = {
    hits: [],
    loading: false,
  };

  async componentDidUpdate(prevProps) {
    const { name, pageNumber } = this.props;

    if (prevProps.name !== name || prevProps.pageNumber !== pageNumber) {
      this.setState({ loading: true });
      const firstResult = await axiosSearch(name, pageNumber);
      this.setState({ hits: firstResult, loading: false });
    }
  }

  render() {
    const { hits } = this.state;
    return (
      <Container fullWidth>
        <ul>
          <ImageGalleryItem hits={hits} />
        </ul>
      </Container>
    );
  }
}

export default ImageGallery;
