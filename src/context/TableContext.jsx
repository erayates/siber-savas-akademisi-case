import { createContext, useEffect, useReducer } from "react";

import { getUsers } from "../services/api";

export const TableContext = createContext();

const TableContextProvider = ({ children }) => {
  const initialState = {
    tableData: [],
    filterOption: "all",
    searchTerm: "",
    selectedUsers: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_TABLE_DATA":
        return { ...state, tableData: action.payload };
      case "SET_FILTER_OPTION":
        return { ...state, filterOption: action.payload };
      case "SET_SEARCH_TERM":
        return { ...state, searchTerm: action.payload };
      case "SET_SELECTED_USERS":
        return { ...state, selectedUsers: action.payload };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const [tableState, tableDispatch] = useReducer(reducer, initialState);

  const getTableData = async () => {
    const response = await getUsers();
    tableDispatch({ type: "SET_TABLE_DATA", payload: response.data });
  };

  useEffect(() => {
    getTableData();
  }, []);

  const filterTableData = () => {
    const { searchTerm, filterOption, tableData } = tableState;
    return tableData.filter((user) =>
      filterOption === "all"
        ? user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
        : user.role === filterOption &&
        (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const refreshDataTable = (userId) => {
    userId ?
      tableDispatch({ type: "SET_TABLE_DATA", payload: tableState.tableData.filter((user) => user.id !== userId) }) : getTableData();
  };

  return (
    <TableContext.Provider
      value={{ tableState, tableDispatch, refreshDataTable, filterTableData }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
