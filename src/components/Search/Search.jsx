import { Box } from '@mui/material'
import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';






function Search() {
  return (
    <>
      <Box sx={{
          display: 'flex',
          margin: '35px 0',
          justifyContent: 'space-between'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <SearchIcon sx={{
            color: '#82868C',
            width: '30px',
            height: '30px',
            marginRight: '16px'
          }}/>
          <FormControl variant="standard">
            <Input id="component-simple" placeholder='Search...' sx={{
              width: '200px',
              height: '40px',
              fontFamily: 'Montserrat',
              fontSize: '13px',
              fontWeight: '600',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              padding: '8px 16px',
              outline: 'none',
              borderRadius: '4px',
              '&::before':{
                borderBottom: 'none !important'
              },
              '&::after':{
                borderBottom: 'none !important'
              },
            }}/>
          </FormControl>
      
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',

        }}>
            <DeleteIcon sx={{
              color: '#82868C',
              width: '30px',
              height: '30px',
              marginRight: '10px'
            }}/>
            <span>Delete</span>
        </Box>
      </Box>
      
    </>
  )
}

export default Search