import React, { useEffect, useState } from 'react';

const LightboxModal = ({ isOpen, currentImage, totalImages, currentIndex, onClose, onPrev, onNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Add a small delay before showing content to allow the fade-in transition
      const timer = setTimeout(() => {
        setIsContentVisible(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsContentVisible(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black backdrop-filter backdrop-blur-sm z-[100] flex items-center justify-center transition-all duration-300 ease-in-out ${isContentVisible ? 'bg-opacity-80 opacity-100' : 'bg-opacity-0 opacity-0'}`}
      onClick={handleBackdropClick}
    >
      <div className="absolute top-4 right-4 z-[110]">
        <button
          onClick={onClose}
          className="text-white text-2xl focus:outline-none hover:opacity-75 transition-opacity duration-200"
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div
        className={`flex items-center justify-center w-full h-full transition-all duration-300 ease-in-out ${isContentVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={handleBackdropClick}
      >
        <button
          onClick={onPrev}
          className="absolute left-4 text-white focus:outline-none z-10 hover:opacity-75 transition-opacity duration-200"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="max-w-5xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center">
            <img
              loading='lazy'
              src={currentImage.src}
              alt={currentImage.description}
              className="max-h-[75vh] max-w-full mx-auto"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-lg mb-2">{currentImage.description}</p>
              <p className="text-white text-sm opacity-75">
                {currentIndex + 1} / {totalImages}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="absolute right-4 text-white focus:outline-none z-10 hover:opacity-75 transition-opacity duration-200"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LightboxModal;