import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="warning">
    <Toolbar>
      <Typography variant="h4">
        Wyszukiwarka Przepisów, 
		Zrób to sam!
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
