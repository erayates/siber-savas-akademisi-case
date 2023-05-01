import { Box } from '@mui/material'
import React, { useContext,useState } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

import { styles } from '../CustomStyles';

import TableContext from '../../context/TableContext';

function Search({dispatch}) {
 

  const handleSearchTermChange = (e) => {
    dispatch({type: 'SET_SEARCH_TERM',payload: e.target.value})    
  }
  
  return (
    <>
      <Box sx={styles.searchCompBoxStyle}>
        <Box sx={styles.searchCompInnerBoxStyle}>
          <SearchIcon sx={styles.searchCompSearchIconStyle}/>
          <FormControl variant="standard">
            <Input id="component-simple" placeholder='Search' onChange={handleSearchTermChange}/>
          </FormControl>
      
        </Box>
        <Box sx={styles.searchCompInnerBoxStyle}>
            <DeleteIcon sx={styles.searchCompDeleteIconStyle}/>
            <span className='delete'>Delete</span>
        </Box>
      </Box>
      
    </>
  )
}

export default Search