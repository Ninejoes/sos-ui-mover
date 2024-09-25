import React, { useState, useRef, useEffect } from 'react';

const SOSSlider = ({ onSlideComplete }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      if (sliderPosition >= sliderRef.current.offsetWidth - 50) {
        onSlideComplete();
      }
      setSliderPosition(0);
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [sliderPosition, onSlideComplete]);

  const handleSliderChange = (e) => {
    const newPosition = Math.min(
      e.target.value,
      sliderRef.current.offsetWidth - 40
    );
    setSliderPosition(newPosition);
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-12 bg-gray-200 rounded-full overflow-hidden"
    >
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      <div
        className="absolute left-0 top-0 h-full bg-gray-300 transition-all duration-300 ease-out flex items-center justify-start pl-2"
        style={{ width: `${sliderPosition + 40}px` }}
      >
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          SOS
        </div>
      </div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
        โทรฉุกเฉิน
      </div>
    </div>
  );
};

export default SOSSlider;
