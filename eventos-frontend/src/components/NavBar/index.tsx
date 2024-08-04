import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UrlRoute } from '../../routes';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            color="#f55742"
            fontWeight="bold"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate(UrlRoute.Home)}>
            Eventos
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
