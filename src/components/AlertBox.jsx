import React, { useState, useEffect, useContext } from 'react';
import { Alert, Box } from '@mui/material';
import { AlertContext } from '../context/AlertContext';

const AlertBox = () => {
  const { alert, hideAlert } = useContext(AlertContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (alert) {
      setOpen(true);
      const timer = setTimeout(() => {
        setOpen(false);
        hideAlert();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert, hideAlert]);

  return (
    <>
      {open & alert.type === 'success' && (
        <Box
          sx={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            textAlign: 'center',
            zIndex: '9999',
          }}
        >
          <Alert severity={alert.type} onClose={() => setOpen(false)} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            Success! Your operation was completed successfully.
          </Alert>
        </Box>
      )}
       {open & alert.type === 'error' && (
        <Box
          sx={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            textAlign: 'center',
            zIndex: '9999',
          }}
        >
          <Alert severity={alert.type} onClose={() => setOpen(false)} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            ERROR! {alert.message}
          </Alert>
        </Box>
      )}
    </>
  );
};

export default AlertBox;