import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../features/base';
function AuthLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AuthLayout;
