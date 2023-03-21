import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/SideBar';

export default function MainLayout() {
  return (
    <>
      <div className="body">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="cont">
          <Outlet />
        </div>
      </div>
    </>
  );
}
