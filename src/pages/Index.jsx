import React from 'react';
import SOSComponent from '../components/SOSComponent';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">ระบบโทร SOS</h1>
      <SOSComponent />
    </div>
  );
};

export default Index;
