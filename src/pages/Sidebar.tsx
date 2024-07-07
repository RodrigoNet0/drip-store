import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#c92071] text-white">
      <div><img src="https://digitalcollege.com.br/wp-content/uploads/2022/05/logo-digital-1536x578.png" alt="logo"
       className="w-24 h-12 p-1" /></div>
      <ul>
        <li className="p-4 hover:bg-[#f161a7] cursor-pointer">Overview</li>
        <li className="p-4 hover:bg-[#f161a7] cursor-pointer">Reports</li>
        <li className="p-4 hover:bg-[#f161a7] cursor-pointer">Analytics</li>
      </ul>
    </div>
  );
};

export default Sidebar;
