import React,{useEffect, useState,useContext} from 'react'
import { Box, Input,Select,MenuItem,FormControl,Stack,Avatar,Modal } from '@mui/material'

import {avatarList} from '../../utils/avatars'
import CustomButton from '../CustomButton'
import { capitalizeFirstLetter, validateFormData } from '../../utils/helpers';
import { ModalContext } from '../../context/ModalContext';

import { styles } from '../CustomStyles';

import { createUser, updateUser } from '../../services/api';
import { TableContext } from '../../context/TableContext';
import LoadingModal from './LoadingModal';



function UserFormModal() {
    const [avatars,setAvatars] = useState([])
    const [activeAvatar,setActiveAvatar] = useState('')

    const [role, setRole] = useState('Role');

    const {refreshDataTable} = useContext(TableContext)
    const {state,dispatch} = useContext(ModalContext)
    
    const [formData,setFormData] = useState({})

    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setAvatars(avatarList)
       
    },[])

    useEffect(() => {
        if(state.selectedUser){
            setFormData(state.selectedUser)
            avatars.map((avatar) => {
                state.selectedUser.avatar === avatar.src && setActiveAvatar(avatar.id)
            })
            state.selectedUser.role !== undefined && setRole(capitalizeFirstLetter(state.selectedUser.role))
        }
    }, [state.selectedUser])

    const handleClose = () => {
        dispatch({type: 'CLOSE_USER_MODAL'})
        dispatch({type: 'SET_SELECTED_USER',payload: null})
        setFormData({})
        setRole('Role')
    };


    const handleChangeRole = (event) => {
        setRole(event.target.value);
        setFormData({
            ...formData,
            role: event.target.value.toLowerCase(),
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(state.selectedUser){
            if(validateFormData(formData)){
                await updateUser(state.selectedUser.id,formData)
                resetAndRefreshTable()
                dispatch({type: 'CLOSE_USER_MODAL'})
            }
        }else{
            if(validateFormData(formData)){
                await createUser(formData)
                resetAndRefreshTable()
                dispatch({type: 'CLOSE_USER_MODAL'})
            }
        }
    }

    const handleChangeInput = (event) => {
        setFormData({...formData,[event.target.name]: event.target.value})
    }

    const resetAndRefreshTable = () => {
        setFormData({})
        refreshDataTable()
    }

    const handleActiveAvatar = (avatar) => {
     
        setActiveAvatar(avatar)
        setFormData({
            ...formData,
            avatar: avatars.filter((item) => item.id === avatar)[0].src,
        })
    }


  

    
  return (
    <Modal open={state.openUserModal} onClose={handleClose}>
        <Box sx={styles.userFormBoxStyle}>
            <Box sx={styles.userFormInnerBoxStyle}>
                <form onSubmit={handleSubmit} method='POST'>
                    <FormControl sx={{width: "100%"}}>
                        <Input name="name" placeholder='Full Name' value={formData.name} sx={styles.userFormInputStyle} onChange={handleChangeInput}></Input>
                    </FormControl>

                    <FormControl sx={{width: "100%"}}>
                        <Input name="username" placeholder='Username' value={formData.username} sx={styles.userFormInputStyle} onChange={handleChangeInput}></Input>
                    </FormControl>

                    <FormControl sx={{width: "100%"}}>
                        <Input name="email" placeholder='Email' value={formData.email} sx={styles.userFormInputStyle} onChange={handleChangeInput}></Input>
                    </FormControl>

                    <FormControl sx={{width: "100%"}}>
                        <Select value={role} onChange={handleChangeRole} sx={styles.userFormInputStyle}>
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
                                                    sx={[styles.userFormAvatarStyle,(avatar.id === activeAvatar ? styles.userFormAvatarActiveStyle : null  ) ]}
                                                    onClick={() => handleActiveAvatar(avatar.id)}
                                                >
                                                </Avatar>
                                        )
                                    })
                                }
                            </Stack>
                        
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        {state.selectedUser ? 
                            <CustomButton type='submit'>
                                Edit User
                            </CustomButton> :    
                            <CustomButton type='submit'>
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

export default UserFormModal