import React, { useState } from 'react';

const SOSSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleSliderChange = (e) => {
    const newPosition = (e.target.value / 100) * (e.target.offsetWidth - 40);
    setSliderPosition(newPosition);
  };

  const handleSliderComplete = () => {
    if (sliderPosition >= e.target.offsetWidth - 50) {
      // Trigger emergency call
      console.log("Emergency call triggered");
    } else {
      setSliderPosition(0);
    }
  };

  return (
    <div className="relative w-full h-12 bg-gray-200 rounded-full overflow-hidden">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        onMouseUp={handleSliderComplete}
        onTouchEnd={handleSliderComplete}
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
