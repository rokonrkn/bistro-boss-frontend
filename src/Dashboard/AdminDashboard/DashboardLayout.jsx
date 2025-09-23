import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/SideBar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      <SideBar />

      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet /> 
      </div>
    </div>
  );
};

export default DashboardLayout;
