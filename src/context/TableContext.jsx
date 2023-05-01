import { createContext, useEffect, useState, useReducer,useContext } from 'react';
import { getUsers } from '../services/api';



export const TableContext = createContext();
const TableContextProvider = ({ children }) => {
    


    const initialState = {
        tableData: [],
        filterOption: 'all',
        searchTerm: '',
        selectedUsers: [],
    }
    const reducer = (state,action) => {
        switch(action.type){
            case 'SET_TABLE_DATA':
                return {...state,tableData: action.payload}
            case 'SET_FILTER_OPTION':
                return {...state,filterOption: action.payload}
            case 'SET_SEARCH_TERM':
                return {...state,searchTerm: action.payload}
            case 'SET_SELECTED_USERS':
                return {...state,selectedUsers: action.payload}
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }
    }

    const [tableState,tableDispatch] = useReducer(reducer,initialState)

    const getTableData = async () => {
        const response = await getUsers()
        if(response.data.length > 0){
            tableDispatch({type: 'SET_TABLE_DATA', payload: response.data})
        }
    }
    

    useEffect(() => {
        getTableData()
    },[])

    
    const filterTableData =  () => {
        if(tableState.searchTerm === ''){
            if(tableState.filterOption === 'all'){
                return tableState.tableData;
            } else {
                return tableState.tableData.filter(user => user.role === tableState.filterOption);
            }
        } else {
            if(tableState.filterOption === 'all'){
                return tableState.tableData.filter(user => user.name.toLowerCase().includes(tableState.searchTerm.toLowerCase()) || user.email.toLowerCase().includes(tableState.searchTerm.toLowerCase()));
            } else {
                return tableState.tableData.filter(user => user.role === tableState.filterOption && (user.name.toLowerCase().includes(tableState.searchTerm.toLowerCase()) || user.email.toLowerCase().includes(tableState.searchTerm.toLowerCase())));
            }
        }
    }


    const refreshDataTable = (userId) => {
        if(userId) tableDispatch({type: 'SET_TABLE_DATA',payload: tableState.tableData.filter((user) => user.id !== userId)})
        else getTableData()
    }

    



    

    return(
        <TableContext.Provider value={{ tableState,tableDispatch, refreshDataTable, filterTableData}}>
            {children}
        </TableContext.Provider>
        
    )
}

export default TableContextProvider;
