
import { Box, Typography } from '@mui/material';
import React from 'react'
import Buttonhere from './Buttonhere';

const Tabpanel = ({context,value,col,index,buttonvalue,handlebuttonclick,...other}) => {
    
  

  return (
    <div
    role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {
      value === index && (
        <><Box p={5}>
            <Typography>{context}</Typography>
          </Box><Buttonhere buttonvalue={buttonvalue} col={col} handlebuttonclick={handlebuttonclick} /></>
      )
}
    </div>
  )
}

export default Tabpanel;