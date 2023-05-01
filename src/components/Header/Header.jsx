import {useContext} from 'react';

import Text from '@mui/material/Typography';
import { Box } from '@mui/material';

import Navigation from './Navigation/Navigation';

import UserForm from '../UserForm';
import { ModalContext } from '../../context/ModalContext';

import { styles } from '../CustomStyles';

import CustomButton from '../CustomButton';

import UsersIcon from '../Icons/UsersIcon';
import PlusIcon from '../Icons/PlusIcon';



export default function Header() {
    const {dispatch} = useContext(ModalContext)

    const handleOpen = () => {
        dispatch({type: 'OPEN_USER_MODAL'})
        dispatch({type: 'SET_SELECTED_USER',payload: null})
    };

  return (
    <header>
        <Box sx={styles.headerCompBoxStyle}>
            <Box sx={styles.headerCompInnerBoxStyle}>
                <Box sx={styles.headerCompIconBoxStyle}>
                    <UsersIcon/>
                </Box>
                <Text sx={styles.headerCompIconTextStyle}>Users
                </Text>
            </Box>
        <Navigation/>
        <CustomButton onClick={handleOpen}>
            <PlusIcon/>
            Add New User
        </CustomButton>
        <UserForm />
    </Box>
        
    </header>
  );
}