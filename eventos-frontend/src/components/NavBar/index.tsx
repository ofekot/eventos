import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Eventos
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
