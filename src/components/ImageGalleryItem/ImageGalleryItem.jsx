import React from 'react';

function ImageGalleryItem({ hits }) {
  return (
    <>
      {hits.map(({ id, webformatURL, tags }) => {
        return (
          <li key={id}>
            <img src={webformatURL} alt={tags} />
          </li>
        );
      })}
    </>
  );
}

export default ImageGalleryItem;
