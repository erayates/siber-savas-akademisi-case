import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'
import TableContextProvider from './context/TableContext.jsx'
import ModalContextProvider from './context/ModalContext.jsx'
import { ThemeProvider } from '@emotion/react';
import {theme} from './provider/themeProvider'
import AlertContextProvider from './context/AlertContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TableContextProvider>
      <ModalContextProvider>
        <AlertContextProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
          </AlertContextProvider>
      </ModalContextProvider>
    </TableContextProvider>
    
  </React.StrictMode>,
)
