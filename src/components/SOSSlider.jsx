import React, { useState, useRef, useEffect } from 'react';

const SOSSlider = ({ onSlideComplete, isEmergency }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleStart = (clientX) => {
    setIsDragging(true);
    updateSliderPosition(clientX);
  };

  const handleMove = (clientX) => {
    if (isDragging) {
      updateSliderPosition(clientX);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (sliderPosition >= 90) {
      onSlideComplete();
    } else {
      resetSlider();
    }
  };

  const handleTouchStart = (e) => handleStart(e.touches[0].clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
  const handleMouseDown = (e) => handleStart(e.clientX);
  const handleMouseMove = (e) => handleMove(e.clientX);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!isEmergency) {
      resetSlider();
    }
  }, [isEmergency]);

  const updateSliderPosition = (clientX) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(newPosition);
  };

  const resetSlider = () => {
    setSliderPosition(0);
  };

  return (
    <div
      ref={sliderRef}
      className="relative h-14 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-100 ease-out flex items-center justify-center text-white font-bold"
        style={{ width: `${sliderPosition}%` }}
      >
        {sliderPosition > 10 && 'โทรฉุกเฉิน'}
      </div>
      <div
        className="absolute top-0 left-0 h-full w-14 bg-red-600 rounded-full flex items-center justify-center text-white"
        style={{ transform: `translateX(${sliderPosition}%)` }}
      >
        SOS
      </div>
    </div>
  );
};

export default SOSSlider;
