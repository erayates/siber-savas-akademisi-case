import { CheckBox } from '@mui/icons-material'
import { Table, TableCell, TableContainer,TableHead,TableRow,TableBody, ThemeProvider, Avatar, TableFooter, TablePagination } from '@mui/material'

import React,{ useEffect,useState } from 'react'

import { getUsers } from '../services/api'
import {theme} from '../provider/themeProvider'

function UserList() {
   const [users, setUsers] = useState([])
   


    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers()
            setUsers(response.data)
        }
        fetchUsers()
    },[])
    

    
  

    
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <TableContainer>
                <TableFooter>
                    <TableHead>
                        <TableRow>
                            <TableCell width={'25px'}>
                                <CheckBox sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}></CheckBox>
                            </TableCell>
                            <TableCell width={'50px'} sx={{fontWeigth:600}}>Avatar</TableCell>
                            <TableCell sx={{fontWeight: 600}}>Name</TableCell>
                            <TableCell sx={{fontWeight: 600}}>Username</TableCell>
                            <TableCell sx={{fontWeight: 600}}>Email</TableCell>
                            <TableCell sx={{fontWeight: 600}}>Role</TableCell>
                            <TableCell sx={{fontWeight: 600}}>Edit</TableCell>   
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {users.map((user) => {
                            return(
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <CheckBox></CheckBox>
                                    </TableCell>
                                    <TableCell>
                                        <Avatar alt="Cindy Baker" src={user.avatar} sx={{borderRadius: "4px"}}/>
                                    </TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>Edit</TableCell>
                                </TableRow>
                            )
                        })}
                        
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                <TablePagination 
                                    showFirstButton={true}
                                    rowsPerPageOptions={false}
                                    rowsPerPage={10}
                                    count={Math.ceil(users.length/10)}
                                />
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </TableFooter>
                    

            </TableContainer>
            
        </ThemeProvider>
    </React.Fragment>
  )
}

export default UserList