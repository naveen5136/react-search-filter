import React,{useState} from "react";
import JSONDATA from './Mock_Data.json';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

import "./style.css";

export default function App() {
const[searchterm,setSearchTerm]=useState('')

  return (
    <div className="App">
      <Fab variant="extended" size="medium" color="primary" aria-label="add">      
       <NavigationIcon sx={{ mr: 1 }}/> search
        </Fab>
        <Fab aria-label='edit' color="secondary"> <EditIcon/></Fab>
    <br/>
     <TextField label="search " onChange={(e)=>{setSearchTerm(e.target.value)}}/>

     {JSONDATA.filter((val)=>{
       if (searchterm==''){
         return val
       } else if (val.first_name.toLowerCase().includes(searchterm.toLowerCase())){
         return val 
       }
     }).map((val,key)=> ( 
       < div key={key}>{val.first_name}</div> 
     ))} 
    </div>
  );
}
