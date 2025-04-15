import React from 'react';
import imageGalleryIconSolid from '../../assets/iconography/image-gallery-solid-white.svg';

// When the native aspect-ratio CSS property gains wider browser support, the tailwind aspect ratio plugin can be easily removed.

const ImageGallery = ({ images, openLightbox, deviceInputType }) => {
  const isTouchDevice = deviceInputType === 'Touch Input';

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 p-4 max-w-4xl mx-auto">
      {/* Primary image */}
      <div
        className="col-span-2 md:row-span-2 md:col-span-2 relative cursor-pointer rounded-2xl overflow-hidden"
        onClick={() => openLightbox(0)}
      >
        <div className="aspect-w-4 aspect-h-3">
          <img
            loading="lazy"
            src={images[0].src}
            alt={images[0].description}
            className="w-full h-full object-cover"
          />
          {isTouchDevice && (
            <div className="absolute top-2 left-2 w-16 h-8 bg-black bg-opacity-50 text-white text-sm rounded-lg p-1">
              <img src={imageGalleryIconSolid} alt="Gallery" className="inline-block w-5 h-5" />
              <span className='inline-block h-5'>1/{images.length}</span>
            </div>
          )}
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
              src={image.src}
              alt={image.description}
              className="w-full h-full object-cover"
            />
            {isTouchDevice ? (
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            ) : (
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">
                  View Gallery
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;