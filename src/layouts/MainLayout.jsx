import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/SideBar';
import { BookProvider } from '../providers/book.provider';

export default function MainLayout() {
  return (
    <>
      <BookProvider>
        <div className="body">
          <div className="sideBar">
            <Sidebar />
          </div>
          <div className="cont">
            <Outlet />
          </div>
        </div>
      </BookProvider>
    </>
  );
}
