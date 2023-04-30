import React,{useEffect, useState} from 'react'
import { Box, Input,Select,MenuItem,FormControl,Stack,Avatar,Modal } from '@mui/material'

import {avatarList} from '../utils/avatars'
import CustomButton from './CustomButton'
import { createNewUser } from '../utils/helpers';

function UserForm({open,setOpen}) {
    const [role,setRole] = useState('Role')
    const [avatars,setAvatars] = useState([])
    const [activeAvatar,setActiveAvatar] = useState('')

    const [formData,setFormData] = useState({
        name: '',
        username: '',
        email: '',
        role: '',
        avatar: '',
    })


    const handleClose = () => setOpen(false);


    const handleChangeRole = (event) => {
        setRole(event.target.value);
        setFormData({
            ...formData,
            role: event.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewUser(formData)
        setFormData({
            name: '',
            username: '',
            email: '',
            role: '',
            avatar: '',
        })

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


    useEffect(() => {
        setAvatars(avatarList)
    },[])

    
  return (
    <Modal
        open={open}
        onClose={handleClose}
      
      >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0px 7px 20px rgba(40, 41, 61, 0.08)',
            border: '1px solid #E3E6EB',
            backgroundColor: '#fff',

        }}>
            <Box sx={{
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}>
                <form onSubmit={handleSubmit} method='POST'>
                    <FormControl sx={{width: '100%'}}>
                        <Input name="name" placeholder='Full Name' value={formData.name} sx={{marginBottom: '30px', width: '100%'}} onChange={handleChangeInput}></Input>
                    </FormControl>
                    <FormControl sx={{width: '100%'}}>
                        <Input name="username" placeholder='Username' value={formData.username} sx={{marginBottom: '30px', width: '100%'}} onChange={handleChangeInput}></Input>
                    </FormControl>
                    <FormControl sx={{width: '100%'}}>
                        <Input name="email" placeholder='Email' value={formData.email} sx={{marginBottom: '30px',  width: '100%'}} onChange={handleChangeInput}></Input>
                    </FormControl>
                    <FormControl sx={{width: '100%'}}>
                        <Select
                            value={role}
                            onChange={handleChangeRole}

                            sx={{width: '100%', display: 'block'}}
                        >
                            <MenuItem value={'Role'} disabled>Role</MenuItem>
                            <MenuItem value={'Contributor'}>Contributor</MenuItem>
                            <MenuItem value={'Subscriber'}>Subscriber</MenuItem>
                            <MenuItem value={'Author'}>Author</MenuItem>
                            <MenuItem value={'Administrator'}>Administrator</MenuItem>
                        </Select>
                    </FormControl>

                        <Box sx={{marginTop: '40px', width: '100%'}}>
                        
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
                                                        sx={{borderRadius: '4px',boxShadow: '0 0 3px 1px rgba(0,0,0,0.1)', cursor:'pointer', ...(avatar.id === activeAvatar && {boxShadow: '0 0px 10px 1px rgba(41, 64, 211, 0.8)'})}}
                                                        onClick={() => handleActiveAvatar(avatar.id)}
                                                    >
                                                    </Avatar>
                                                
                                            )
                                        })
                                    }
                                </Stack>
                         
                        </Box>
                        <Box>
                            <CustomButton sx={{marginTop: '30px'}} type='submit'>
                                    Create User
                            </CustomButton>
                        </Box>
                    </form>
                
            </Box>
        </Box>
    </Modal>
  )
}

export default UserForm