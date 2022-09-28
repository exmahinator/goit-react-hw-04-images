import React from 'react';
import { ImageItem, Image } from 'components/ui';

function ImageGalleryItem({ hits, onImgClick }) {
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
