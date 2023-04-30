import React,{useEffect, useState} from 'react'
import { Box, Input,Select,MenuItem,InputLabel, NativeSelect,FormControl,Stack,Avatar,Modal } from '@mui/material'

import {avatarList} from '../utils/avatars'
import CustomButton from './CustomButton'


function UserForm({open,setOpen}) {
    const [role,setRole] = useState('Role')
    const [avatars,setAvatars] = useState([])
    const [activeAvatar,setActiveAvatar] = useState('')


    const handleClose = () => setOpen(false);


    const handleChangeRole = (event) => {
        setRole(event.target.value);
    }

    useEffect(() => {
        setAvatars(avatarList)
    },[])

    
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
                <Input placeholder='Full Name' sx={{marginBottom: '30px', width: '100%'}}></Input>
                <Input placeholder='Username' sx={{marginBottom: '30px', width: '100%'}}></Input>
                <Input placeholder='Email' sx={{marginBottom: '30px',  width: '100%'}}></Input>
                <Select
                    value={role}
                    onChange={handleChangeRole}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    sx={{width: '100%'}}
                >
                    <MenuItem value={'Role'} disabled>Role</MenuItem>
                    <MenuItem value={'Contributor'}>Contributor</MenuItem>
                    <MenuItem value={'Subscriber'}>Subscriber</MenuItem>
                    <MenuItem value={'Author'}>Author</MenuItem>
                    <MenuItem value={'Administrator'}>Administrator</MenuItem>
                </Select>

                <Box sx={{marginTop: '40px', width: '100%'}}>
                    <span className='select-avatar' >Select Avatar:</span>
                    <Stack direction="row" spacing={1.5} sx={{marginTop: '16px'}}>
                        {
                            avatars.map((avatar) => {
                                return(
                                    <Avatar 
                                        alt={avatar.name} 
                                        src={avatar.src} 
                                        id={avatar.id} 
                                        sx={{borderRadius: '4px',boxShadow: '0 0 3px 1px rgba(0,0,0,0.1)', cursor:'pointer', ...(avatar.id === activeAvatar && {boxShadow: '0 0px 10px 1px rgba(41, 64, 211, 0.8)'})}}
                                        onClick={() => setActiveAvatar(avatar.id)}
                                    >
                                    </Avatar>
                                )
                            })
                        }
                    </Stack>
                </Box>
                <Box>
                    <CustomButton sx={{marginTop: '30px'}}>
                            Create User
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    </Modal>
  )
}

export default UserForm