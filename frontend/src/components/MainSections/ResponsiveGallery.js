import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import LightboxModal from './LightboxModal';
import { deviceType } from 'detect-it';
import { useMemo } from 'react';

const ResponsiveGallery = ({ images, title }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.classList.add('overflow-hidden'); // Prevent scrolling
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.classList.remove('overflow-hidden');
  };
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };
  
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };
  
  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);


  /**
  * Detects the type of device being used.
  * @returns {string} 'Touch Input' for touch-only devices, 'Mouse Input' for mouse or hybrid devices.
  */
  const detectDevice = () => {
    if (deviceType === 'touchOnly') {
      console.log("User is on a Touch Input Device");
      return 'Touch Input'; // Devices with only touch input
    } else if (deviceType === 'mouseOnly' || deviceType === 'hybrid') {
      console.log("User is on a Mouse Input Device");
      return 'Mouse Input'; // Devices with mouse or hybrid input
    }
  };

  // Determine device type at render time and useMemo so we only calculate once during component lifecycle
  const deviceInputType = useMemo(() => detectDevice(), []);
  
  return (
    <>
      <ImageGallery 
        images={images} 
        openLightbox={openLightbox} 
        deviceInputType={deviceInputType}
      />
      
      <LightboxModal 
        isOpen={lightboxOpen}
        currentImage={images[currentImageIndex]}
        totalImages={images.length}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onPrev={goToPrevImage}
        onNext={goToNextImage}
      />
    </>
  );
};

export default ResponsiveGallery;