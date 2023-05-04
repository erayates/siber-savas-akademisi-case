import React from 'react'

import Container from '@mui/material/Container';

import Header from '../../components/Header/Header'
import AlertBox from '../../components/AlertBox';
import DataTable from '../../components/DataTable';
import Toolbar from '../../components/Toolbar/Toolbar';

import { styled } from '@mui/material/styles';




const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100vh',
  },
}));

function Home() {

  return (
    <React.Fragment>
      <StyledContainer width='sm' maxWidth='lg'>
        <Header />
        <Toolbar />
        <DataTable />
        <AlertBox />
      </StyledContainer>
    </React.Fragment>
  )
}

export default Home