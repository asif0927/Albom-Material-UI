import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <PhotoCameraIcon></PhotoCameraIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:"30px"}}>
           Album Layout
          </Typography>
          <MenuIcon></MenuIcon>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
