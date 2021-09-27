import React,{ useContext } from "react";


function ToDo({index,todo,key}){
    // const {todos}=React.useContext(ContextData);
    console.log(todo)
    return(
        <div>
           
          
           <p> {todo.text}</p>

        </div>
    )
}
export default ToDo;