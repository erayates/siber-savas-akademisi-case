import { createContext, useState } from "react";

export const AlertContext = createContext();
const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showSuccessAlert = (message) => {
    setAlert({ type: "success", message });
  };

  const showErrorAlert = (message) => {
    setAlert({ type: "error", message });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider
      value={{ alert, showSuccessAlert, showErrorAlert, hideAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
