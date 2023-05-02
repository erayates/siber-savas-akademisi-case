import { createContext, useState } from 'react';

export const AlertContext = createContext();
const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({});

  const showSuccessAlert = () => {
    setAlert({ type: 'success'});
  };

  const showErrorAlert = (message) => {
    setAlert({ type: 'error', message });
  };

  const hideAlert = () => {
    setAlert({});
  };

  return (
    <AlertContext.Provider value={{ alert, showSuccessAlert, showErrorAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;