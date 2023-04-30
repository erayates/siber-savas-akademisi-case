import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'

const CustomButton = styled(Button)({
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

export default CustomButton
