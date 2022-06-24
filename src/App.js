import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Contextapp from '../src/context/Contextapp';
import './App.css';
import TodoList from "./components/todolist";
import Login from "./components/login";
import { Routes, Route, Link, NavLink } from 'react-router-dom';



function App() {
 const [todo,setTodo]=useState();
  const[todos,setTodos]=useState([]);
 
  const data={
    todos:[],
    todo:'',
  }

  return (
    <Contextapp.Provider value={data}>
      <nav>
        <Link to="/" style={{textDecoration:"none", }} >Login</Link>
        <Link to="/todos" style={{textDecoration:"none", }}>Todos</Link>
      </nav>
        <Routes>
         <Route path="/todos" element={<TodoList/>}/>
         <Route path="/" element={<Login/>}/>
        </Routes>
        
    </Contextapp.Provider>
  );
}

export default App;