import React from 'react';
import { ImageItem, Image } from 'components/ui';
import PropTypes from 'prop-types';

function ImageGalleryItem({ hits, onImgClick }) {
  // console.log(hits);
  return (
    <>
      {hits.map(({ id, webformatURL, tags, largeImageURL, webformatWidth }) => {
        return (
          <ImageItem key={id}>
            <Image
              src={webformatURL}
              alt={tags}
              width={webformatWidth}
              onClick={() => onImgClick(largeImageURL)}
            />
          </ImageItem>
        );
      })}
    </>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImgClick: PropTypes.func.isRequired,
};
