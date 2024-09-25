import React, { useState, useRef, useEffect } from 'react';

const SOSSlider = ({ onSlideComplete, isEmergency }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(newPosition);

    if (newPosition >= 90) {
      onSlideComplete();
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    setSliderPosition(0);
  };

  useEffect(() => {
    if (!isEmergency) {
      setSliderPosition(0);
    }
  }, [isEmergency]);

  return (
    <div
      ref={sliderRef}
      className="relative h-14 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
      onMouseDown={handleMouseDown}
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