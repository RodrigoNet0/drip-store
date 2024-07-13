'use client';
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`w-64 bg-[#c92071] text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button
        className="p-4 text-xl font-bold"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Open' : 'Close'}
      </button>
      <div className="p-4 text-xl font-bold">Digital Store</div>
      <section className="p-4 text-xl font-bold">
        <ul>
          <li className="p-4 hover:bg-[#f161a7] cursor-pointer">
            <select className="bg-[#c92071] hover:bg-[#f161a7] text-white border-none p-2 rounded">
              <option>Overview</option>
            </select>
          </li>
          <li className="p-4 hover:bg-[#f161a7] cursor-pointer">
            <select className="bg-[#c92071] hover:bg-[#f161a7] text-white border-none p-2 rounded">
              <option>Reports</option>
            </select>
          </li>
          <li className="p-4 hover:bg-[#f161a7] cursor-pointer">
            <select className="bg-[#c92071] hover:bg-[#f161a7] text-white border-none p-2 rounded">
              <option>Analytics</option>
            </select>
          </li>
          <li className="p-4 hover:bg-[#f161a7] cursor-pointer">
            <select className="bg-[#c92071] hover:bg-[#f161a7] text-white border-none p-2 rounded">
              <option>Refunds & Returns</option>
            </select>
          </li>
          <li className="p-4 hover:bg-[#f161a7] cursor-pointer">
            <select className="bg-[#c92071] hover:bg-[#f161a7] text-white border-none p-2 rounded">
              <option>Customers</option>
            </select>
          </li>
          <li className="p-4 hover:bg-[#f161a7] cursor-pointer">
            <select className="bg-[#c92071] hover:bg-[#f161a7] text-white border-none p-2 rounded">
              <option>Orders</option>
            </select>
          </li>
          <li className="p-4 hover:bg-[#f161a7] cursor-pointer">
            <select className="bg-[#c92071] hover:bg-[#f161a7] text-white border-none p-2 rounded">
              <option>Settings</option>
            </select>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
