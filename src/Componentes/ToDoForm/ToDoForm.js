
import React, { useState } from "react";
import { Input,Form,Button } from 'antd';
import 'antd/dist/antd.css';
import './ToDoForm.css'
function ToDoForm ({addTodo}){
    const [value,setValue]=useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!value) {
           
         {console.log('err')}
        }
        else{
            addTodo(value)
            setValue("")
        }
   
    }
  
    const validateMessages = {
        required: '${label} is required!',
        types: {
          text: '${label} is not a valid todo!',
       
        },}
    return(
<div>
    <h1 className="title">ToDo</h1>
  
<Form onSubmitCapture={handleSubmit} validateMessages={validateMessages}>
<Form.Item
        label=""
        name="ToDo"
        rules={[{ required: true, message: 'Please input your ToDo Item!' }]}
      ></Form.Item>
        <Input onChange={(e)=>setValue(e.target.value)} value={value} rules={[{ required: true, message: 'Please input your username!' }]} />
{/* <Input placeholder="Enter DoTo" onChange={(e)=>setValue(e.target.value)} value={value}/> */}

</Form>
</div>
    )

}
export default ToDoForm;