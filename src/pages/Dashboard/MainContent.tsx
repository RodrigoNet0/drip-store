import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

interface MainContentProps {
  toggleSidebar: () => void;
  
}

const MainContent: React.FC<MainContentProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex-1 p-8">
      <button
        className="mb-4 p-2 bg-[#c92071] text-white text-xl font-bold rounded-full"
        onClick={toggleSidebar}
      >
        Open Sidebar
      </button>
      <h1 className="text-[#f161a7] text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default MainContent;
