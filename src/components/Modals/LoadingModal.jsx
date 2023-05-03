
import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import { styles } from '../CustomStyles';

const LoadingModal = () => {
  return (
    <Box sx={[styles.loadingModalBoxStyle,{visibility: open ? 'visible' : 'hidden'}]}>
      <CircularProgress color="primary" size={80} />
      <Typography variant="caption" component="div" color="text.secondary" sx={{marginTop: '30px',fontSize: '16px'}}>
          Please wait... Don't close the screen!
      </Typography>
    </Box>
  );
};

export default LoadingModal;
