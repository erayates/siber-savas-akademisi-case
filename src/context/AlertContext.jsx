import { createContext, useState } from "react";

export const AlertContext = createContext();

const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlertBox = (type, message) => {
    setAlert({ type, message });
  };


  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider
      value={{ alert, showAlertBox, hideAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
