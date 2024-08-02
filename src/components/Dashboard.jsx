import React from 'react';
import Cards from './Cards';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import Cardsprogress from './Cardsprogress'
import MenuList from './MenuList';

const Dashboard = () => {
  return (
    <div className="p-6 bg-black text-white flex flex-col overflow-y-auto lg:h-[38rem]">
      <span className="text-lg font-medium"> Dashboard</span>
      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <Cards />
        <Cardsprogress/>
        <ActivityChart /> 
        <MenuList/>     
        <RecentOrders />
        <Feedback />
      </div>
    </div>
  );
};

export default Dashboard;
