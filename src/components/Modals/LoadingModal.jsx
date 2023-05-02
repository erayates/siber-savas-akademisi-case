import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const LoadingModal = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        visibility: open ? 'visible' : 'hidden',
      }}
    >
      <CircularProgress color="primary" size={80} />
  
        <Typography variant="caption" component="div" color="text.secondary" sx={{marginTop: '30px',fontSize: '16px'}}>
          Please wait... Dont't close the screen!
        </Typography>
    </Box>
  );
};

export default LoadingModal;
