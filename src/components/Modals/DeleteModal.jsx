import { Modal,Button,Box } from '@mui/material'
import React,{ useContext,useReducer,useState,useEffect }  from 'react'
import { deleteUser } from '../../services/api';
import { TableContext } from '../../context/TableContext';
import { ModalContext } from '../../context/ModalContext';
import { styles } from '../CustomStyles';



  

function DeleteModal() {
  
    const {refreshDataTable} = useContext(TableContext)
    const {state,dispatch} = useContext(ModalContext)
    
    const handleDelete = async () => {
        if(state.selectedUserId !== undefined){
            await deleteUser(state.selectedUserId)
            refreshDataTable(state.selectedUserId)
            handleCloseDeleteModal()
     
        }
    }

    const handleCloseDeleteModal = () => {
        dispatch({type: 'SET_SELECTED_USER_ID',payload: null})
        dispatch({type: 'CLOSE_DELETE_MODAL'})
    };

  return (
    <Modal 
        open={state.openDeleteModal}
        onClose={handleCloseDeleteModal}
    >
        <Box sx={styles.deleteModalBoxStyle}>
            <span className='delete-confirm'>Are you sure want to delete this user?</span>
            
            <Box sx={{marginTop: '30px'}}>
                <Button color="error" variant='contained' onClick={handleDelete}>Delete</Button>
                <Button variant="outlined" onClick={handleCloseDeleteModal} sx={{marginLeft: '20px'}}>Cancel</Button>
            </Box>
        </Box>

    </Modal>  
  )
}

export default DeleteModal