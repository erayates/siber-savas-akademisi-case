import { CheckBox } from '@mui/icons-material'
import { Table, TableCell, TableContainer,TableHead,TableRow,TableBody, ThemeProvider, Avatar, TableFooter, TablePagination, Pagination,Stack, Checkbox } from '@mui/material'

import React,{ useEffect,useState } from 'react'

import { getUsers } from '../services/api'
import {theme} from '../provider/themeProvider'
import { capitalizeFirstLetter } from '../utils/helpers'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function UserList() {
   const [users, setUsers] = useState([])
   const [page, setPage] = useState(1);
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const [selectedUsers, setSelectedUsers] = useState([]);



   const handleChangePage = (event, newPage) => {
        if (newPage < 0 || newPage >= Math.ceil(users.length / rowsPerPage) + 1) {
            return;
        }
        setPage(newPage);
    };

  const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
  };


  const handleAllUsers = (event) => {
    if (event.target.checked) {
      // tüm kullanıcıları seç
      setSelectedUsers(users.map(user => user.id));
    } else {
      // seçili tüm kullanıcıları temizle
      setSelectedUsers([]);
    }
  };

  const handleChange = (event, id) => {
    if (event.target.checked) {
      if(!selectedUsers.includes(id)){
        setSelectedUsers([...selectedUsers, id]);
      }
    } else {
      
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    }
  };

    
  const isSelected = (id) => selectedUsers.includes(id);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers()
            if(response.data.length > 0){
                setUsers(response.data)
            }
        }
        fetchUsers()
    },[])
    
    console.log(selectedUsers)
    
  

    
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell width={'25px'}>
                                
                                <Checkbox checked={selectedUsers.length === users.length}
                                    onChange={handleAllUsers}
                                    indeterminate={selectedUsers.length > 0 && selectedUsers.length < users.length}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}/>
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
                        {
                            
                        }
                        {(rowsPerPage > 0
                            ? users.slice((page-1) * rowsPerPage, (page-1) * rowsPerPage + rowsPerPage)
                            : users).map((user) => {
                                
                            return(
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <Checkbox onChange={(e) => handleChange(e,user.id)} checked={isSelected(user.id)} />
                                    </TableCell>
                                    <TableCell>
                                        <Avatar alt="Cindy Baker" src={user.avatar} sx={{borderRadius: "4px"}}/>
                                    </TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{capitalizeFirstLetter(user.role)}</TableCell>
                                    <TableCell>
                                        <EditIcon sx={{
                                            color: '#82868C',
                                            width: '30px',
                                            height: '30px',
                                            marginRight: '10px'
                                       
                                        }}/>
                                        <DeleteIcon sx={{
                                            color: '#82868C',
                                            width: '30px',
                                            height: '30px',
                                        }}/>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                        
                        
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TablePagination
                            
                            count={Math.ceil(users.length / rowsPerPage)}
                            
                            page={page}
                            rowsPerPageOptions={[-1]}
                            
                            rowsPerPage={rowsPerPage}
                            
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}

                           
                            ActionsComponent={({ page, count }) => (
                                <Stack spacing={2}>
                                    <Pagination count={count} page={page} onChange={handleChangePage} />
                                </Stack>
                            )}
                        />
                        </TableRow>
                    </TableFooter>
                    </Table>
            </TableContainer>
            
        </ThemeProvider>
    </React.Fragment>
  )
}

export default UserList