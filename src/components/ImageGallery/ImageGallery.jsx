import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  ImageContainer,
  LoadButton,
  Spinner,
  IdleText,
} from 'components/ui';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
// import Modal from '../Modal';

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
    // console.log(data.data);
    // return data.data.hits;
    return data.data;
  } catch (error) {
    return alert(error);
  }
};

const STATES = {
  idle: 'idle',
  pending: 'pending',
};

// ---------------------------------------------------------------------------------------

class ImageGallery extends Component {
  state = {
    hits: [],
    total: 0,
    status: STATES.idle,
  };

  async componentDidUpdate(prevProps) {
    const { name, pageNumber } = this.props;

    if (prevProps.name !== name || prevProps.pageNumber !== pageNumber) {
      this.setState({ status: STATES.pending });

      const { hits, total } = await axiosSearch(name, pageNumber);

      this.setState(prevState => {
        // console.log(prevState);
        // console.log(prevState.hits);
        return {
          hits: pageNumber > 1 ? [...prevState.hits, ...hits] : hits,
          status: STATES.resolved,
          total,
        };
      });

      setTimeout(() => {
        // console.log(this.state.hits);
        window.scrollTo({
          top: this.state.hits.length * 500,
          behavior: 'smooth',
        });
      }, 400);
    }
  }

  render() {
    const { hits, total, status } = this.state;

    if (status === 'idle') {
      return <IdleText>Please, enter your search...</IdleText>;
    }

    return (
      <>
        {status === 'pending' && (
          <Spinner>
            <Loader />
          </Spinner>
        )}
        <Container flexColumn noPadding>
          <ImageContainer noPadding>
            <ImageGalleryItem hits={hits} onImgClick={this.props.openModal} />
          </ImageContainer>
          {hits.length > 0 && hits.length < total && (
            <LoadButton type="button" onClick={() => this.props.handleClick()}>
              "Load more..."
            </LoadButton>
          )}
        </Container>
      </>
    );
  }
}

export default ImageGallery;
