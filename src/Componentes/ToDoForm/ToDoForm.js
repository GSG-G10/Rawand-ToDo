
import React, { useState } from "react";
import { Input } from 'antd';
import 'antd/dist/antd.css';
function ToDoForm ({addTodo}){
    const [value,setValue]=useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!value) {
            {console.log("falid")}
        }
        else{
            addTodo(value)
            setValue("")
        }
   
    }
  
    
    return(
<div>
<form onSubmit={handleSubmit}>
<Input placeholder="Basic usage" onChange={(e)=>setValue(e.target.value)} value={value}/>
</form>
</div>
    )

}
export default ToDoForm;