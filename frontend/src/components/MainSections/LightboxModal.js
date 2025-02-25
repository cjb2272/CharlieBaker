import React from 'react';

const LightboxModal = ({ isOpen, currentImage, totalImages, currentIndex, onClose, onPrev, onNext }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="absolute top-4 right-4">
        <button 
          onClick={onClose} 
          className="text-white text-2xl focus:outline-none"
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex items-center justify-center w-full h-full">
        <button 
          onClick={onPrev} 
          className="absolute left-4 text-white focus:outline-none"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="max-w-5xl max-h-screen p-4">
          <img 
            src={currentImage} 
            alt="Gallery Image" 
            className="max-h-[80vh] max-w-full mx-auto"
          />
        </div>
        
        <button 
          onClick={onNext} 
          className="absolute right-4 text-white focus:outline-none"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        <span>{currentIndex + 1}</span> / <span>{totalImages}</span>
      </div>
    </div>
  );
};

export default LightboxModal;