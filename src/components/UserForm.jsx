import React,{useEffect, useState,useContext} from 'react'
import { Box, Input,Select,MenuItem,FormControl,Stack,Avatar,Modal } from '@mui/material'

import {avatarList} from '../utils/avatars'
import CustomButton from './CustomButton'
import { capitalizeFirstLetter } from '../utils/helpers';
import { ModalContext } from '../context/ModalContext';

import { styles } from './CustomStyles';

import { createUser, updateUser } from '../services/api';
import { TableContext } from '../context/TableContext';


function UserForm() {
    const [avatars,setAvatars] = useState([])
    const [activeAvatar,setActiveAvatar] = useState('')
    const [user,setUser] = useState({})
    const [role, setRole] = useState('Role');

    const {refreshDataTable} = useContext(TableContext)
    const {state,dispatch} = useContext(ModalContext)
    
  

    const [formData,setFormData] = useState({})

    useEffect(() => {
        setAvatars(avatarList)
    },[])

    useEffect(() => {
        if(state.selectedUser){
            setUser(state.selectedUser)
            setFormData(state.selectedUser)
          
        }
    }, [state])

    const handleClose = () => {
        dispatch({type: 'CLOSE_USER_MODAL'})
        dispatch({type: 'SET_SELECTED_USER',payload: null})
        setFormData({})
        
    };


    const handleChangeRole = (event) => {
        setRole(event.target.value);
        setFormData({
            ...formData,
            role: event.target.value.toLowerCase(),
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.selectedUser){
            updateUser(state.selectedUser.id,formData)
            setFormData({})
            dispatch({type: 'CLOSE_USER_MODAL'})
        }else{
            createUser(formData)
            setFormData({})
            dispatch({type: 'CLOSE_USER_MODAL'})
        }
    }

    const handleChangeInput = (event) => {
        setFormData({...formData,[event.target.name]: event.target.value})
    }

    const handleActiveAvatar = (avatar) => {
        setActiveAvatar(avatar)
        setFormData({
            ...formData,
            avatar: avatar,
        })
    }


  

    
  return (
    <Modal open={state.openUserModal} onClose={handleClose}>
        <Box sx={styles.userFormBoxStyle}>
            <Box sx={styles.userFormInnerBoxStyle}>
                <form onSubmit={handleSubmit} method='POST'>
                    <FormControl>
                        <Input name="name" placeholder='Full Name' value={formData.name} sx={styles.userFormInputStyle} onChange={handleChangeInput}></Input>
                    </FormControl>

                    <FormControl>
                        <Input name="username" placeholder='Username' value={formData.username} sx={styles.userFormInputStyle} onChange={handleChangeInput}></Input>
                    </FormControl>

                    <FormControl>
                        <Input name="email" placeholder='Email' value={formData.email} sx={styles.userFormInputStyle} onChange={handleChangeInput}></Input>
                    </FormControl>

                    <FormControl sx={{width: "100%"}}>
                        <Select value={formData.role} onChange={handleChangeRole} sx={styles.userFormInputStyle}>
                            <MenuItem value={'Role'} disabled>Role</MenuItem>
                            <MenuItem value={'Contributor'}>Contributor</MenuItem>
                            <MenuItem value={'Subscriber'}>Subscriber</MenuItem>
                            <MenuItem value={'Author'}>Author</MenuItem>
                            <MenuItem value={'Administrator'}>Administrator</MenuItem>
                        </Select>
                    </FormControl>

                    <Box sx={styles.userFormInputStyle}>
                        <span className='select-avatar' >Select Avatar:</span>
                            <Stack direction="row" spacing={1.5} sx={{marginTop: '16px'}}>
                                {
                                    avatars.map((avatar) => {
                                        return(
                                                <Avatar 
                                                    alt={avatar.name} 
                                                    src={avatar.src} 
                                                    name="avatar"
                                                    key={avatar.id} 
                                                    sx={[styles.userFormAvatarStyle,(avatar.id === activeAvatar ? styles.userFormAvatarActiveStyle : null)]}
                                                    onClick={() => handleActiveAvatar(avatar.id)}
                                                >
                                                </Avatar>
                                        )
                                    })
                                }
                            </Stack>
                        
                    </Box>
                    <Box>
                        {state.selectedUser ? 
                            <CustomButton sx={{marginTop: '30px'}} type='submit'>
                                Edit User
                            </CustomButton> :    
                            <CustomButton sx={{marginTop: '30px'}} type='submit'>
                                Create User
                            </CustomButton>
                        }
                    </Box>
                </form>
            </Box>
        </Box>
    </Modal>
  )
}

export default UserForm