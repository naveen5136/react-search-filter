import React,{useState} from "react";
import JSONDATA from './Mock_Data.json';
import "./style.css";

export default function App() {
const[searchterm,setSearchTerm]=useState('')

  return (
    <div className="App">
    <br/>
     <input placeholder="search " onChange={(e)=>{setSearchTerm(e.target.value)}}/>

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
