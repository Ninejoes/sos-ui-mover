import React from 'react';
import { ArrowLeft, Home, MessageSquare, Bell, Grid } from 'lucide-react';
import SOSSlider from '../components/SOSSlider';

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 flex items-center justify-between">
        <ArrowLeft className="w-6 h-6" />
        <h1 className="text-lg font-semibold">ขอความช่วยเหลือ SOS</h1>
        <div className="w-6 h-6"></div> {/* Placeholder for balance */}
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <SOSSlider />
          <p className="text-center mt-4 text-sm">เลื่อนเพื่อโทรหาบริการฉุกเฉิน</p>
          
          <div className="mt-8 text-center">
            <p className="font-semibold">เราให้ความสำคัญกับทุกชีวิต</p>
            <p>ขณะนี้ เจ้าหน้าที่ให้บริการเต็มทุกคู่สาย</p>
            <p>โปรดรอประมาณ <span className="text-red-500">{9}</span> สาย...</p>
          </div>
        </div>

        <div className="mt-8">
          <img src="/placeholder.svg" alt="Emergency Services" className="w-full max-w-xs mx-auto" />
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white p-4">
        <nav className="flex justify-between">
          <button className="flex flex-col items-center">
            <Home className="w-6 h-6" />
            <span className="text-xs">หน้าหลัก</span>
          </button>
          <button className="flex flex-col items-center">
            <MessageSquare className="w-6 h-6" />
            <span className="text-xs">แจ้งเหตุ</span>
          </button>
          <button className="flex flex-col items-center">
            <Bell className="w-6 h-6 text-blue-500" />
            <span className="text-xs text-blue-500">SOS</span>
          </button>
          <button className="flex flex-col items-center">
            <Grid className="w-6 h-6" />
            <span className="text-xs">อื่น ๆ</span>
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default Index;
