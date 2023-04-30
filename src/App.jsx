import * as React from 'react';



import './App.css'
import Home from './pages/Home/Home';
import TableContextProvider from './context/TableContext';
import { ThemeProvider } from '@emotion/react';
import {theme} from './provider/themeProvider'
import ModalContextProvider from './context/ModalContext';


function App() {


  return (
    <React.Fragment>
      <ModalContextProvider>
      <TableContextProvider>
        
          <ThemeProvider theme={theme}>
            <Home/>
          </ThemeProvider>
        
      </TableContextProvider>
      </ModalContextProvider>
      

    </React.Fragment>

  )
}

export default App
