import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { Cookies } from '../features/cookies';
import { Header, Footer } from '../features/base';

function MainLayout() {
  return (
    <Box component='main'>
      <Header />

      <Outlet />
      <Footer />
      <Cookies />
    </Box>
  );
}

export default MainLayout;
