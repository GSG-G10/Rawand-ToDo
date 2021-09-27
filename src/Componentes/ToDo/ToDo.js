import React,{ useContext } from "react";
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './ToDo.css'
function ToDo({index,todo,key,setTodos}){
  
 
    return(
     <div className="contanier">
        
<div className="site-card-wrapper">

<Row gutter={16}>
  <Col span={8}>
    <Card title="" bordered={false}>
    {todo.text}
    <Button ghost className="button">Complete</Button>
    <Button ghost className="buttonX">X</Button>
    </Card>
  </Col>
  </Row>
  </div>
  </div>
    )
}
export default ToDo;