import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export default function Navigation() {
  const [value, setValue] = useState('AllUsers');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  const CustomTabs = styled(Tabs)({
    

    '& .MuiTabs-indicator': {
        backgroundColor: '#2940D3',
        height: '2px',
        
    },
    
    

    '& .MuiTab-root': {
        marginTop: '16px',
        marginBottom: '16px',
        color: '#82868C',
        fontSize: '13px',
        fontWeight:'600',
        lineHeight: '16px',
        textTransform: 'none',
        '&:hover': {
            color: '#2940D3',
            opacity: 1,
        },
        fontFamily: 'Montserrat',
        '&.Mui-selected': {
            color: '#2940D3',
        },
        
    },

  })

  return (
    <nav>
        <Box sx={{ width: '100%', textTransform: 'none' }}>
        <CustomTabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            
            indicatorColor="#2940D3"
        >
            <Tab value="AllUsers" label="All Users" />
            <Tab value="Contributor" label="Contributor" />
            <Tab value="Author" label="Author" />
            <Tab value="Administrator" label="Administrator" />
            <Tab value="Subscriber" label="Subscriber" />
        </CustomTabs>
        </Box>
    </nav>
  );
}