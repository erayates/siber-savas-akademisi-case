import { createContext, useEffect, useState,useReducer } from 'react';


export const ModalContext = createContext();
const ModalContextProvider = ({ children }) => {
    const initialState = {
        openUserModal: false,
        openDeleteModal: false,
        selectedUserId: '',
        selectedUser: {}
    }

    const reducer = (state,action) => {
        switch(action.type){
            case 'OPEN_DELETE_MODAL':
                return {...state,openDeleteModal: true}
            case 'CLOSE_DELETE_MODAL':
                return {...state,openDeleteModal: false}
            case 'OPEN_USER_MODAL':
                return {...state,openUserModal: true}
            case 'CLOSE_USER_MODAL':
                return {...state,openUserModal: false}
            case 'SET_SELECTED_USER_ID':
                return {...state,selectedUserId: action.payload}
            case 'SET_SELECTED_USER':
                return {...state,selectedUser: action.payload}

            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
    
    return(
        <ModalContext.Provider value={{ state,dispatch }}>
            {children}
        </ModalContext.Provider>
        
    )
}

export default  ModalContextProvider;
