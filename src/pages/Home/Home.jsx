import React from 'react'
import Search from '../../components/Search/Search'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Header from '../../components/Header/Header'
import UserList from '../../components/UserList';
import AlertBox from '../../components/AlertBox';



function Home() {
  
  return (
    <React.Fragment>
      
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: 'white', height: '100vh' }}>
                <Header/>
                <Search/>
                <UserList/>
                <AlertBox/>
             
            </Box>
        
        </Container>
    </React.Fragment>
  )
}

export default Home