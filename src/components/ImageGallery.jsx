// ImageGallery.js

import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <img
            className="w-full h-full object-cover object-center"
            src={image.url}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
