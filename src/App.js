
import './App.css';
import React ,{useState} from 'react';
import ContextData from './ContextData/ContextData';
import ToDo from './Componentes/ToDo/ToDo';
import ToDoForm from './Componentes/ToDoForm/ToDoForm';
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);
  const addTodo =(text)=>{
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  return (
    <div className="App">
    
     <ToDoForm addTodo={addTodo}/>
     {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
            setTodos={setTodos}
         
          />
        ))}
       
    
         
    
    </div>
  );
}

export default App;
