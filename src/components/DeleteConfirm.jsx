import { Modal,Button,Box } from '@mui/material'
import React,{ useContext }  from 'react'
import { deleteUser } from '../services/api';
import { TableContext } from '../context/TableContext';



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
  

function DeleteConfirm({openDeleteModal,setOpenDeleteModal,selectedUserId}) {
    const {tableData,setTableData} = useContext(TableContext)

    const handleDelete = (id) => {
        deleteUser(id)
        setTableData(tableData.filter((user) => user.id !== id))
        setOpenDeleteModal(false);
       
    }


    const handleCloseDeleteModal = () => setOpenDeleteModal(false);


  return (
    <Modal 
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
    >
        <Box sx={style}>
            <span className='delete-confirm'>Are you sure want to delete this user?</span>
            
            <Box sx={{marginTop: '20px'}}>
                <Button color="error" variant='contained' onClick={() => handleDelete(selectedUserId)}>Delete</Button>
                <Button variant="outlined" onClick={handleCloseDeleteModal} sx={{marginLeft: '20px'}}>Cancel</Button>
            </Box>
        </Box>

    </Modal>  
  )
}

export default DeleteConfirm