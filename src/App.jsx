import * as React from 'react';



import './App.css'
import Home from './pages/Home/Home';
import TableContextProvider from './context/TableContext';
import { ThemeProvider } from '@emotion/react';
import {theme} from './provider/themeProvider'


function App() {


  return (
    <React.Fragment>
      
      <TableContextProvider>
        <ThemeProvider theme={theme}>
          <Home/>
        </ThemeProvider>
      </TableContextProvider>
      

    </React.Fragment>

  )
}

export default App
