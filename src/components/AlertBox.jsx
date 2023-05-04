import React, { useState, useEffect, useContext } from 'react';

import { Alert, Box } from '@mui/material';

import { AlertContext } from '../context/AlertContext';

import { styles } from './CustomStyles';

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
  }, [alert,hideAlert]);

  return (
    <>
      {open && (
        <Box
          sx={styles.alertBoxStyle} >
          <Alert
            severity={alert.type}
            onClose={() => setOpen(false)}
            sx={styles.alertStyle}
          >
            {alert.message}
           
          </Alert>
        </Box>
      )}
    </>
  );
};

export default AlertBox;
