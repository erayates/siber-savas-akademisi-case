import { Modal,Button,Box } from '@mui/material'
import React,{ useContext,useReducer }  from 'react'
import { deleteUser } from '../services/api';
import { TableContext } from '../context/TableContext';
import { ModalContext } from '../context/ModalContext';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    borderRadius: '8px',
    p: 4,
  };
  

function DeleteConfirm() {
    const {tableData,setTableData} = useContext(TableContext)
    const {state,dispatch} = useContext(ModalContext)
    

    const handleDelete = () => {
        deleteUser(state.selectedUserId)
        dispatch({type: 'CLOSE_DELETE_MODAL'})
        setTableData(tableData.filter((user) => user.id !== state.selectedUserId))
        
       
    }


    const handleCloseDeleteModal = () => {
        dispatch({type: 'CLOSE_DELETE_MODAL'})
    };


  return (
    <Modal 
        open={state.openDeleteModal}
        onClose={handleCloseDeleteModal}
    >
        <Box sx={style}>
            <span className='delete-confirm'>Are you sure want to delete this user?</span>
            
            <Box sx={{marginTop: '20px'}}>
                <Button color="error" variant='contained' onClick={handleDelete}>Delete</Button>
                <Button variant="outlined" onClick={handleCloseDeleteModal} sx={{marginLeft: '20px'}}>Cancel</Button>
            </Box>
        </Box>

    </Modal>  
  )
}

export default DeleteConfirm