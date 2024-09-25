import React, { useState } from 'react';
import SOSSlider from './SOSSlider';
import { PhoneCall } from 'lucide-react';

const SOSComponent = () => {
  const [isEmergency, setIsEmergency] = useState(false);

  const handleEmergencyCall = () => {
    setIsEmergency(true);
    // ในที่นี้เราจะจำลองการโทรฉุกเฉิน
    setTimeout(() => {
      alert('กำลังโทรหาบริการฉุกเฉิน');
      setIsEmergency(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">ขอความช่วยเหลือ SOS</h2>
      <div className="mb-4 text-center">
        <PhoneCall className="inline-block w-12 h-12 text-red-500" />
      </div>
      <p className="text-gray-600 mb-4 text-center">
        เลื่อนไปทางขวาเพื่อโทรหาบริการฉุกเฉิน
      </p>
      <SOSSlider onSlideComplete={handleEmergencyCall} isEmergency={isEmergency} />
      {isEmergency && (
        <p className="mt-4 text-green-600 text-center font-semibold">
          กำลังโทร... โปรดรอสักครู่
        </p>
      )}
    </div>
  );
};

export default SOSComponent;
