import React from "react";
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './ToDo.css'
function ToDo({index,todo,key,completeTodo,removeTodo}){
  
 
    return(
     <div className="contanier">
        
<div className="site-card-wrapper">

<Row gutter={16}>
  <Col span={8}>
    <Card title="" bordered={false} style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
    
    {todo.text}
    <Button ghost className="button" onClick={()=>completeTodo(index)}>complete</Button>
    <Button ghost className="buttonX" onClick={()=>removeTodo(index)}>X</Button>
    </Card>
  </Col>
  </Row>
  </div>
  </div>
    )
}
export default ToDo;