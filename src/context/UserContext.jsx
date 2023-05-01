import { createContext, useEffect, useState,useReducer } from 'react';
import { deleteUser, updateUser } from '../services/api';


export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
    const initialState = {
        selectedUserId: '',
    }

    const reducer = (state,action) => {
        switch(action.type){
            case 'SET_SELECTED_USER_ID':
                return {...state,selectedUserId: action.payload}
            
            case 'UPDATE_USER':
                updateUser(state.selectedUserId,action.payload)
                break;
            case 'DELETE_USER':
                deleteUser(state.selectedUserId)
                break;
            default:
                throw new Error(`Unhandled action type: ${action.type}`);

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
    
    return(
        <UserContext.Provider value={{ state,dispatch }}>
            {children}
        </UserContext.Provider>
        
    )
}

export default  UserContextProvider;
