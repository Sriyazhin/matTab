import { AppBar, ButtonGroup, Input, Tab, Tabs } from '@mui/material';
// import Input from '@mui/joy/Input';
import './App.css';
import { useEffect, useState } from 'react';
import Tabpanel from './Tabpanel';

function App() {
  const [tabdata,setTabdata] = useState([]);
  // const [buttoncolor,setButtoncolor] = useState(false);
  const [value,setValue] = useState(0);

  const handleChange = (event,newValue) => {
    console.log(event,'event');
    setValue(newValue);
  };


  function handleTabNum(e){
    const inputnumber = parseInt(e.target.value, 10);
    console.log(inputnumber,'inputnumber');
    if(inputnumber){
      const newTabData = Array.from({ length: inputnumber }, (_, index) => ({
        label: `Tab ${index + 1}`,
        content: `Content for Tab ${index + 1}`,
        ind:index
        
        // handlebuttonclick: tabNum,
      }));
      // const forButton = Array.from({length:inputnumber},(_,index)=>({
        
        
      // }));
      // setButtondata(forButton);
      setTabdata(newTabData);
      setValue(0);
    }
    
  }
  
  function handlebuttonclick(index){
    console.log(index,'index')
setValue(index);
  }
  

  function handletabchange(e) {
    const tabnumber=parseInt(e.target.value, 10)-1;
    setValue(tabnumber)
   }
   console.log(tabdata,'tabdata')
  return (
    <div>
      <Input color='primary' sx={{border: '1px solid',borderRadius:'5px',marginRight:'20px'}} variant="outlined" type='number' placeholder='Total Tabs Required' onChange={handleTabNum} />
      <Input color='primary' sx={{border: '1px solid',borderRadius:'5px'}} variant="outlined" type='number' placeholder='Navigate To' onChange={handletabchange} /> 
      <Tabs fullWidth value={value} onChange={handleChange} >
        {
          tabdata.map((tab,index)=>(
            <Tab key={index} label={tab.label}></Tab>
          ))
          }
        
      </Tabs>
      {tabdata.map((tab,index) => (
        <Tabpanel key={index} value={value} index={index} context={tab.content}> 
          
        </Tabpanel>
      ))
      }  
      <ButtonGroup disableElevation fullWidth variant="contained" >
      {tabdata.map((btn,index) => (
        
        <Tabpanel key={index} col={index===value?"success":"primary"} handlebuttonclick={()=>handlebuttonclick(index)} buttonvalue={index+1} />
      ))}
      </ButtonGroup>
    </div>
  );
}

export default App;
