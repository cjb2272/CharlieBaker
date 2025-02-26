import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import LightboxModal from './LightboxModal';

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
  
  return (
    <div className="lg:max-w-4xl">
      <ImageGallery 
        images={images} 
        openLightbox={openLightbox} 
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
    </div>
  );
};

export default ResponsiveGallery;