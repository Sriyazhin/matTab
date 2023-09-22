import { AppBar, Input, Tab, Tabs } from '@mui/material';
// import Input from '@mui/joy/Input';
import './App.css';
import { useState } from 'react';
import Tabpanel from './Tabpanel';

function App() {
  const [tabNum,setTabNum] = useState();
  const [tabdata,setTabdata] = useState([]);
  const [value,setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  function handlechange(e){
    const inputnumber = parseInt(e.target.value, 10);
    console.log(inputnumber,'inputnumber');
    if(inputnumber){
      setTabNum(inputnumber);
      const newTabData = Array.from({ length: inputnumber }, (_, index) => ({
        label: `Tab ${index + 1}`,
        content: `Content for Tab ${index + 1}`,
      }));
      setTabdata(newTabData);
      setValue(0);
    }
    else {
      
      setTabNum(0);
      setTabdata([]);
      setValue(0);
    }
  }

  function handletabchange(e) {
    const tabnumber=parseInt(e.target.value, 10)-1;
    setValue(tabnumber)
   }

   function handlebuttonchange(e) {
    
   }
  return (
    <div>
      <Input color='primary' sx={{border: '1px solid',borderRadius:'5px',marginRight:'20px'}} variant="outlined" type='number' placeholder='Total Tabs Required' onChange={handlechange} />
      <Input color='primary' sx={{border: '1px solid',borderRadius:'5px'}} variant="outlined" type='number' placeholder='Navigate To' onChange={handletabchange} /> 
      <Tabs value={value} onChange={handleChange} aria-label="Dynamic tabs">
        {
          tabdata.map((tab,index)=>(
            <Tab key={index} label={tab.label}></Tab>
          ))
          }
        
      </Tabs>
      {tabdata.map((tab, index) => (
        <Tabpanel key={index} value={value} index={index} context={tab.content} handlebuttonchange={handlebuttonchange}>
          
        </Tabpanel>
      ))
      }
    </div>
  );
}

export default App;