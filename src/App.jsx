import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import './App.css'
import Header from './components/Header'

function App() {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: 'white', height: '100vh' }}>
          <Header/>
        </Box>
        
      </Container>

    </React.Fragment>

  )
}

export default App
