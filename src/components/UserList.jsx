
import { Table, TableCell, TableContainer,TableHead,TableRow,TableBody, Avatar, TableFooter, TablePagination, Pagination,Stack, Checkbox } from '@mui/material'

import React, { useEffect,useState, useContext } from 'react'


import { capitalizeFirstLetter } from '../utils/helpers'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { TableContext } from '../context/TableContext'
import DeleteModal from './Modals/DeleteModal';
import UserFormModal from './Modals/UserFormModal';
import { ModalContext } from '../context/ModalContext';




function UserList() {
   const [page, setPage] = useState(1);
   const [rowsPerPage, setRowsPerPage] = useState(10);

   const [users, setUsers] = useState([]);   
   
   const { tableState,filterTableData,tableDispatch} = useContext(TableContext)
   
   const {dispatch} = useContext(ModalContext)

   

   useEffect(() => {
        setUsers(filterTableData())
   },[tableState.filterOption,tableState.tableData,tableState.searchTerm])
   
  

   
   const handleOpenUserModal = (user) => {
      dispatch({type: 'OPEN_USER_MODAL'})
      dispatch({type: 'SET_SELECTED_USER',payload: user})
    }

    
    const handleOpenDeleteModal = (id) => {
      dispatch({type: 'OPEN_DELETE_MODAL'})
      dispatch({type: 'SET_SELECTED_USER_ID',payload: id})
    };

   
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
      tableDispatch({type: 'SET_SELECTED_USERS',payload: users.map((user) => user.id)})
    } else {
      tableDispatch({type: 'SET_SELECTED_USERS',payload: []})
    }
  };
  


  const handleChange = (event, id) => {
    if (event.target.checked) {
      if(!tableState.selectedUsers.includes(id)){
        tableDispatch({type: 'SET_SELECTED_USERS',payload: [...tableState.selectedUsers, id]})
      }
    } else {
     
      tableDispatch({type: 'SET_SELECTED_USERS',payload: tableState.selectedUsers.filter(userId => userId !== id)})
    }
  };

  const isSelected = (id) => tableState.selectedUsers.includes(id);

  return (
    <React.Fragment>      
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell width={'50px'}>
                                
                                <Checkbox checked={tableState.selectedUsers.length === users.length}
                                    onChange={handleAllUsers}
                                    indeterminate={tableState.selectedUsers.length > 0 && tableState.selectedUsers.length < users.length}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}/>
                            </TableCell>
                            <TableCell width={'50px'} sx={{fontWeight: 600}}>Avatar</TableCell>
                            <TableCell width={'200px'} sx={{fontWeight: 600}}>Name</TableCell>
                            <TableCell width={'250px'} sx={{fontWeight: 600}}>Username</TableCell>
                            <TableCell width={'250px'} sx={{fontWeight: 600}}>Email</TableCell>
                            <TableCell width={'100px'} sx={{fontWeight: 600}}>Role</TableCell>
                            <TableCell width={'100px'} sx={{fontWeight: 600}}>Edit</TableCell>   
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        
                        {(rowsPerPage > 0
                            ? users.slice((page-1) * rowsPerPage, (page-1) * rowsPerPage + rowsPerPage)
                            : users).map((user) => {
                                
                            return(
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <Checkbox onChange={(e) => handleChange(e,user.id)} checked={isSelected(user.id)} />
                                    </TableCell>
                                    <TableCell>
                                                                           
                                        <Avatar alt="User Avatar" src={user.avatar} sx={{borderRadius: "4px"}}/>
                                    </TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{capitalizeFirstLetter(user.role)}</TableCell>
                                    <TableCell>
                                        <EditIcon sx={{cursor:'pointer'}} onClick={() => handleOpenUserModal(user)}/>
                                        <DeleteIcon sx={{cursor:"pointer"}} onClick={() => handleOpenDeleteModal(user.id)}/>
                                    </TableCell>
                                    
                                </TableRow>
                            )
                        })}
                        <DeleteModal/>
                        <UserFormModal/>
                        
                    
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
            
 
    </React.Fragment>
  )
}

export default UserList