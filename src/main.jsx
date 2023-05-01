import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'
import TableContextProvider from './context/TableContext.jsx'
import ModalContextProvider from './context/ModalContext.jsx'
import { ThemeProvider } from '@emotion/react';
import {theme} from './provider/themeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TableContextProvider>
      <ModalContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ModalContextProvider>
    </TableContextProvider>
    
  </React.StrictMode>,
)
