import {useContext} from 'react';

import Text from '@mui/material/Typography';
import { Box } from '@mui/material';

import Navigation from './Navigation/Navigation';


import { ModalContext } from '../../context/ModalContext';

import { styles } from '../CustomStyles';

import CustomButton from '../CustomButton';

import UsersIcon from '../Icons/UsersIcon';
import PlusIcon from '../Icons/PlusIcon';
import UserFormModal from '../Modals/UserFormModal';



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
        <UserFormModal />
    </Box>
        
    </header>
  );
}