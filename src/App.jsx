import * as React from 'react';



import './App.css'
import Home from './pages/Home/Home';
import TableContextProvider from './context/TableContext';

function App() {


  return (
    <React.Fragment>
      <TableContextProvider>
        <Home/>
      </TableContextProvider>
      

    </React.Fragment>

  )
}

export default App
