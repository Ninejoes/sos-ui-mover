import React, { useState } from 'react';
import SOSSlider from './SOSSlider';
import { PhoneCall } from 'lucide-react';

const SOSComponent = () => {
  const [isEmergency, setIsEmergency] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleEmergencyCall = () => {
    setIsEmergency(true);
    setShowPopup(true);
    // จำลองการโทรฉุกเฉิน
    setTimeout(() => {
      setIsEmergency(false);
      setShowPopup(false);
    }, 5000); // ปิด Pop-up หลังจาก 5 วินาที
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
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-xl font-bold mb-2">กำลังโทร...</p>
            <p>โปรดรอสักครู่</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SOSComponent;
