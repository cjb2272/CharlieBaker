import React from 'react';

// When the native aspect-ratio CSS property gains wider browser support, the tailwind aspect ratio plugin can be easily removed.

const ImageGallery = ({ images, openLightbox }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
        {/* Primary image */}
        <div 
          className="md:col-span-2 lg:row-span-2 lg:col-span-2 relative cursor-pointer rounded-2xl overflow-hidden" 
          onClick={() => openLightbox(0)}
        >
          <div className="aspect-w-4 aspect-h-3">
            <img 
              loading="lazy" 
              src={images[0]} 
              alt="Property Image 1" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">
                View Gallery
              </span>
            </div>
          </div>
        </div>
        
        {/* Secondary images */}
        {images.slice(1, 3).map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => openLightbox(index + 1)}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img 
                loading="lazy" 
                src={image} 
                alt={`Property Image ${index + 2}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;