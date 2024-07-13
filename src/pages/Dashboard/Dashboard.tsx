'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <MainContent toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Dashboard;
