import React from 'react';
import SOSComponent from '../components/SOSComponent';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">ระบบโทร SOS</h1>
      <div className="w-full max-w-md">
        <SOSComponent />
      </div>
    </div>
  );
};

export default Index;
