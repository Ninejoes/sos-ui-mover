import React from 'react';
import { ArrowLeft } from 'lucide-react';
import SOSSlider from '../components/SOSSlider';

const Index = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <ArrowLeft className="arrow-icon" />
        <h1 className="header-title">ขอความช่วยเหลือ SOS</h1>
        <div className="placeholder"></div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div>
          <SOSSlider />
          <p className="slider-instruction">เลื่อนเพื่อโทรหาบริการฉุกเฉิน</p>
          
          <div className="emergency-info">
            <p className="info-title">เราให้ความสำคัญกับทุกชีวิต</p>
            <p>ขณะนี้ เจ้าหน้าที่ให้บริการเต็มทุกคู่สาย</p>
            <p>โปรดรอประมาณ <span className="wait-time">{9}</span> สาย...</p>
          </div>
        </div>

        <div className="image-container">
          <img src="/placeholder.svg" alt="Emergency Services" className="emergency-image" />
        </div>
      </main>
    </div>
  );
};

export default Index;
