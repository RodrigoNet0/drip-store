'use client';
import React from 'react';
const Sidebar = () => {


  return (
    <div className="w-64 bg-[#c92071] text-white">
      <div className=" p-4 text-xl font-bold">Digital Store</div>
      <ul>
        <li className="p-4 hover:bg-[#f161a7] cursor-pointer">Overview</li>
        <li className="p-4 hover:bg-[#f161a7] cursor-pointer">Reports</li>
        <li className="p-4 hover:bg-[#f161a7] cursor-pointer">Analytics</li>
        <li className="p-4 hover:bg-[#f161a7] cursor-pointer">Refunds & Returns</li>
        <li className="p-4 hover:bg-[#f161a7] cursor-pointer">Customers</li>
        <li className="p-4 hover:bg-[#f161a7] cursor-pointer">Orders</li>

      </ul>
    </div>
  );
};

export default Sidebar;
