import {useState,useReducer,useContext} from 'react';

import Text from '@mui/material/Typography';
import { Tabs,Container,CssBaseline,Box } from '@mui/material';
import Divider from '../Divider/Divider';
import Navigation from './Navigation/Navigation';
import  CustomButton from '../CustomButton';
import UserForm from '../UserForm';
import { ModalContext } from '../../context/ModalContext';


export default function Header() {
    
    const {state,dispatch} = useContext(ModalContext)
    


    // const handleClose = () => {
    //     dispatch({type: 'CLOSE_USER_MODAL'})
    // };

    const handleOpen = () => {
        
        dispatch({type: 'OPEN_USER_MODAL'})
        
    };

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
        <CustomButton onClick={handleOpen}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0576 3.63523C12.3853 2.52928 11.3774 1.624 10.1982 1.0908C8.93701 0.520973 7.52344 0.361305 6.16699 0.638161C4.88818 0.898903 3.6958 1.56687 2.79492 2.51023C1.88965 3.45799 1.27588 4.6782 1.07666 5.97459C1.02393 6.3159 0.996094 6.66014 0.996094 7.00584C0.996094 8.34325 1.40918 9.67332 2.18848 10.7617C2.95898 11.8384 4.03272 12.6631 5.27637 13.1201C6.55078 13.5874 7.979 13.6328 9.28271 13.2607C10.5322 12.9033 11.6719 12.1621 12.498 11.1572C13.355 10.1172 13.8721 8.84276 13.9775 7.49803C14.0845 6.15623 13.7563 4.78514 13.0576 3.63523ZM9.93457 7.43944H7.93945V9.44774C7.93945 9.69383 7.7373 9.87694 7.5 9.88719C7.2627 9.89745 7.06055 9.67772 7.06055 9.44774V7.43944H5.05371C4.80762 7.43944 4.62451 7.23729 4.61426 6.99998C4.604 6.76268 4.82373 6.56053 5.05371 6.56053H7.06055V4.56541C7.06055 4.31932 7.2627 4.13621 7.5 4.12596C7.7373 4.1157 7.93945 4.33543 7.93945 4.56541V6.56053H9.93457C10.1807 6.56053 10.3638 6.76268 10.374 6.99998C10.3843 7.23729 10.1646 7.43944 9.93457 7.43944Z" fill="white"/>
        </svg>

            Add New User
        </CustomButton>
        <UserForm />
    </Box>
        <Divider/>
    </header>
  );
}