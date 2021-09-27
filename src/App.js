
import './App.css';
import React ,{useState} from 'react';
import ContextData from './ContextData/ContextData';
import ToDo from './Componentes/ToDo';
import ToDoForm from './Componentes/ToDoForm';
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
  return (
    <div className="App">
     <ContextData.Provider value={{todos,setTodos}}>
     {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
         
          />
        ))}
{/*        
       <ToDoForm /> */}
         
     </ContextData.Provider>
    </div>
  );
}

export default App;
