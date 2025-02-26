import React from 'react';

const ImageGallery = ({ images, openLightbox }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
        {/* Primary image */}
        <div 
          className="lg:row-span-2 lg:col-span-2 relative overflow-hidden cursor-pointer h-96 lg:h-auto rounded-2xl" 
          onClick={() => openLightbox(0)}
        >
          <img
            src={images[0]}
            alt="Property Image 1"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
            <span className="text-white font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">
              View Gallery
            </span>
          </div>
        </div>
        
        {/* Secondary images */}
        {images.slice(1, 3).map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer h-64 lg:h-auto rounded-2xl"
            onClick={() => openLightbox(index + 1)}
          >
            <img
              src={image}
              alt={`Property Image ${index + 2}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;