import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';

const GeneralLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default GeneralLayout;
