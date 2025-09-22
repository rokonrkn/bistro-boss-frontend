import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/SideBar';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet /> 
      </div>
    </div>
  );
};

export default DashboardLayout;
