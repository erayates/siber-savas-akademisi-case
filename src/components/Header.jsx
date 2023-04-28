import * as React from 'react';

import Text from '@mui/material/Typography';
import { Tabs,Container,CssBaseline,Box, Divider } from '@mui/material';
import Navigation from './Navigation/Navigation';
import AddUser from './AddUser/AddUser';

export default function Header() {
  return (
    <header>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
               
            }}>
                <Box sx={{
                    bgcolor: '#cfe8fc',
                    height: '40px',
                    width: '40px',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.73285 3.81304C5.16609 3.52959 5.45136 3.04757 5.45136 2.50016C5.45136 1.62767 4.72711 0.920654 3.83301 0.920654C2.9389 0.920654 2.21438 1.62767 2.21438 2.50016C2.21438 3.04757 2.5002 3.52986 2.93316 3.81304C1.81013 4.13679 1 5.02797 1 5.89486C1 6.97953 2.26881 6.84101 3.83328 6.84101C5.3983 6.84101 6.66656 6.9798 6.66656 5.89486C6.66683 5.0277 5.85697 4.13652 4.73285 3.81304ZM15.0663 3.81304C15.4995 3.52959 15.7848 3.04757 15.7848 2.50016C15.7848 1.62767 15.0605 0.920654 14.1664 0.920654C13.2723 0.920654 12.5478 1.62794 12.5478 2.50016C12.5478 3.04757 12.8336 3.52986 13.2666 3.81304C12.1436 4.13679 11.3334 5.02797 11.3334 5.89486C11.3334 6.97953 12.6022 6.84101 14.1667 6.84101C15.7317 6.84101 17 6.9798 17 5.89486C17 5.0277 16.1901 4.13652 15.0663 3.81304ZM9.99325 11.4178C10.4713 11.1047 10.7864 10.5728 10.7864 9.96827C10.7864 9.0053 9.98668 8.22435 8.99959 8.22435C8.01277 8.22435 7.21276 9.0053 7.21276 9.96827C7.21276 10.5728 7.52784 11.105 8.0062 11.4178C6.76584 11.7752 5.87174 12.759 5.87174 13.7161C5.87174 14.9137 7.27211 14.7604 8.99986 14.7604C10.7276 14.7604 12.1277 14.9137 12.1277 13.7161C12.128 12.7587 11.2336 11.7749 9.99325 11.4178Z" stroke="#2940D3" strokeWidth="1.3" strokeMiterlimit="10"/>
                    <path d="M11.7692 11.0745L14.5385 8.3053" stroke="#2940D3" strokeWidth="1.3" strokeMiterlimit="10"/>
                    <path d="M3.46155 8.3053L6.23078 11.0745" stroke="#2940D3" strokeWidth="1.3" strokeMiterlimit="10"/>
                    <path d="M6.84613 3.99756H10.8461" stroke="#2940D3" strokeWidth="1.3" strokeMiterlimit="10"/>
                </svg>
                </Box>
                <Text sx={{
                    color: '#3A3C40',
                    fontSize: '14px',
                    fontWeight: '600',
                    fontFamily: 'Montserrat',
                    lineHeight: '17px',
                    marginLeft: '12px'
                    }}>Users
                </Text>
            </Box>
        <Navigation/>
        <AddUser/>
    </Box>
        <Divider/>
    </header>
  );
}