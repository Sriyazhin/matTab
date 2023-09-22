
import { Box, Button, Typography } from '@mui/material';
import React from 'react'

const Tabpanel = ({context,value,index,handlebuttonchange,...other}) => {
    
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {/* {value === index && ( */}
        <Box p={5}>
          <Typography>{context}</Typography>
        </Box>

        <Button onClick={handlebuttonchange} value={index}>{index+1}</Button>
      {/* )} */}
    </div>
  )
}

export default Tabpanel;