import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'

const AddUserButton = styled(Button)({
    fontSize: '13px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 20px 12px 15px',
  
    backgroundColor: '#2940D3',
    borderRadius: '4px',
    gap: '10px',
    lineHeight: '16px',
    color: '#fff',
    textTransform: 'none',
    fontFamily: 'Montserrat',
    
    '&:hover': {
        backgroundColor: '#2940D3',
        opacity: 0.9,
    },
})

function AddUser() {
  return (
    <AddUserButton>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0576 3.63523C12.3853 2.52928 11.3774 1.624 10.1982 1.0908C8.93701 0.520973 7.52344 0.361305 6.16699 0.638161C4.88818 0.898903 3.6958 1.56687 2.79492 2.51023C1.88965 3.45799 1.27588 4.6782 1.07666 5.97459C1.02393 6.3159 0.996094 6.66014 0.996094 7.00584C0.996094 8.34325 1.40918 9.67332 2.18848 10.7617C2.95898 11.8384 4.03272 12.6631 5.27637 13.1201C6.55078 13.5874 7.979 13.6328 9.28271 13.2607C10.5322 12.9033 11.6719 12.1621 12.498 11.1572C13.355 10.1172 13.8721 8.84276 13.9775 7.49803C14.0845 6.15623 13.7563 4.78514 13.0576 3.63523ZM9.93457 7.43944H7.93945V9.44774C7.93945 9.69383 7.7373 9.87694 7.5 9.88719C7.2627 9.89745 7.06055 9.67772 7.06055 9.44774V7.43944H5.05371C4.80762 7.43944 4.62451 7.23729 4.61426 6.99998C4.604 6.76268 4.82373 6.56053 5.05371 6.56053H7.06055V4.56541C7.06055 4.31932 7.2627 4.13621 7.5 4.12596C7.7373 4.1157 7.93945 4.33543 7.93945 4.56541V6.56053H9.93457C10.1807 6.56053 10.3638 6.76268 10.374 6.99998C10.3843 7.23729 10.1646 7.43944 9.93457 7.43944Z" fill="white"/>
        </svg>
        Add New User
    </AddUserButton>
  )
}

export default AddUser