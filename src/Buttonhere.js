import { Button } from '@mui/material'
import React from 'react';
import './App.css';

const Buttonhere = ({col,buttonvalue,handlebuttonclick}) => {
  return (
      
    <Button size="large" color={col} onClick={handlebuttonclick}>{buttonvalue}</Button>
  )
}

export default Buttonhere