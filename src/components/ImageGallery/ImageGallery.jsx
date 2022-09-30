import React, { useState, useEffect } from 'react';
import axiosSearch from 'axiousRequest/AxiousRequest';
// import PropTypes from 'prop-types';
import {
  Container,
  ImageContainer,
  LoadButton,
  Spinner,
  IdleText,
  LoadButtonContainer,
} from 'components/ui';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';

const STATES = {
  idle: 'idle',
  pending: 'pending',
};

const ImageGallery = ({ pageNumber, name, handleClick, openModal }) => {
  const [hitsReceived, setHitsReceived] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [status, setStatus] = useState(STATES.idle);

  useEffect(() => {
    if (!name) {
      return;
    }

    setStatus(STATES.pending);

    async function axiosRequest() {
      const { hits, total } = await axiosSearch(name, pageNumber);

      setHitsReceived(hitsReceived => [...hitsReceived, ...hits]);

      setTotalElements(total);
    }

    axiosRequest();
  }, [name, pageNumber]);

  useEffect(() => {
    if (!name) {
      return;
    }
    setStatus(STATES.resolved);
    setTimeout(() => {
      window.scrollTo({
        top: hitsReceived.length * 500,
        behavior: 'smooth',
      });
    }, 400);
  }, [hitsReceived, name]);

  return status === 'idle' ? (
    <IdleText>Please, enter your search...</IdleText>
  ) : (
    <>
      <Container flexColumn noPadding>
        <ImageContainer noPadding>
          <ImageGalleryItem hits={hitsReceived} onImgClick={openModal} />
        </ImageContainer>

        <LoadButtonContainer>
          {status === 'pending' && (
            <Spinner>
              <Loader />
            </Spinner>
          )}
          {hitsReceived.length > 0 &&
            hitsReceived.length < totalElements &&
            status !== 'pending' && (
              <LoadButton type="button" onClick={() => handleClick()}>
                Load more...
              </LoadButton>
            )}
        </LoadButtonContainer>
      </Container>
    </>
  );
};

export default ImageGallery;

// ------------------------------------------------------------------------------------------------------------------------

// import React, { Component } from 'react';
// import axiosSearch from 'axiousRequest/AxiousRequest';
// import PropTypes from 'prop-types';
// import {
//   Container,
//   ImageContainer,
//   LoadButton,
//   Spinner,
//   IdleText,
//   LoadButtonContainer,
// } from 'components/ui';
// import ImageGalleryItem from '../ImageGalleryItem';
// import Loader from '../Loader';

// const STATES = {
//   idle: 'idle',
//   pending: 'pending',
// };

// class ImageGallery extends Component {
//   state = {
//     hits: [],
//     total: 0,
//     status: STATES.idle,
//   };

//   async componentDidUpdate(prevProps) {
//     const { name, pageNumber } = this.props;

//     if (prevProps.name !== name || prevProps.pageNumber !== pageNumber) {
//       this.setState({ status: STATES.pending });

//       const { hits, total } = await axiosSearch(name, pageNumber);

//       this.setState(prevState => {
//         // console.log(prevState);
//         // console.log(prevState.hits);
//         return {
//           hits: pageNumber > 1 ? [...prevState.hits, ...hits] : hits,
//           status: STATES.resolved,
//           total,
//         };
//       });

//       setTimeout(() => {
//         // console.log(this.state.hits);
//         window.scrollTo({
//           top: this.state.hits.length * 500,
//           behavior: 'smooth',
//         });
//       }, 400);
//     }
//   }

//   render() {
//     const { hits, total, status } = this.state;
//     // console.log(this.props.openModal);
//     // console.log(this.props.handleClick);

//     if (status === 'idle') {
//       return <IdleText>Please, enter your search...</IdleText>;
//     }

//     return (
//       <>
//         <Container flexColumn noPadding>
//           <ImageContainer noPadding>
//             <ImageGalleryItem hits={hits} onImgClick={this.props.openModal} />
//           </ImageContainer>

//           <LoadButtonContainer>
//             {status === 'pending' && (
//               <Spinner>
//                 <Loader />
//               </Spinner>
//             )}
//             {hits.length > 0 && hits.length < total && status !== 'pending' && (
//               <LoadButton
//                 type="button"
//                 onClick={() => this.props.handleClick()}
//               >
//                 Load more...
//               </LoadButton>
//             )}
//           </LoadButtonContainer>
//         </Container>
//       </>
//     );
//   }
// }

// export default ImageGallery;

// ImageGallery.propTypes = {
//   name: PropTypes.string.isRequired,
//   pageNumber: PropTypes.number.isRequired,
//   openModal: PropTypes.func.isRequired,
//   handleClick: PropTypes.func.isRequired,
// };
