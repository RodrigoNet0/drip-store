'use client';

import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dash = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dash;
