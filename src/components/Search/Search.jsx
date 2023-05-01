import { Box } from '@mui/material'
import React, { useContext,useEffect,useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

import { styles } from '../CustomStyles';

import {TableContext} from '../../context/TableContext';
import { deleteSelectedUsers, deleteUser } from '../../services/api';

function Search() {
  const [searchTerm,setSearchTerm] = useState('')
  const {tableState,tableDispatch,refreshDataTable} = useContext(TableContext)

  useEffect(() => {
    tableDispatch({type: 'SET_SEARCH_TERM',payload: searchTerm});
  }, [searchTerm,tableDispatch]);

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDeleteSelectedUsers = () => {
    if(tableState.selectedUsers.length > 0){
      if(deleteSelectedUsers(tableState.selectedUsers)){
        refreshDataTable()
      }

    } 
  };
  
  return (
    <>
      <Box sx={styles.searchCompBoxStyle}>
        <Box sx={styles.searchCompInnerBoxStyle}>
          <SearchIcon sx={styles.searchCompSearchIconStyle}/>
          <FormControl variant="standard">
            <Input id="component-simple" placeholder='Search' onChange={handleChangeSearchTerm}/>
          </FormControl>
      
        </Box>
        <Box sx={styles.searchCompDeleteBoxStyle} onClick={handleDeleteSelectedUsers}>
            <DeleteIcon sx={styles.searchCompDeleteIconStyle}/>
            <span className='delete'>Delete</span>
        </Box>
      </Box>
      
    </>
  )
}

export default Search