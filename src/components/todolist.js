import reducer from "../reducers/reducersTodo";
import {useReducer} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
export default function Todolist(){
   
    const submitHandle= e=>{
    e.preventDefault()
    dispatch({
      type:'ADD_TODO',
      todo:state.todo
    })
  
  }

  const updateTodo = e => {
		dispatch({
			type: 'UPDATE_TODO',
			value: e.target.value
		})
	}

  const deleteTodo = index => {
		dispatch({
			type: 'DELETE_TODO',
			index
		})
	}


  const onChange = e=>{
   
    dispatch({
      type: 'SET_TODO',
      value: e.target.value,
    })
  }

  const[state,dispatch]=useReducer(reducer,{
    todo:'',
    todos:[],
  });

return(
    <div classname="App" >
       <h1 style={{textAlign:"center",backgroundColor:"Highlight"  }}>Todo App</h1>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange} style={{width:"100%" }}></input>
        <button type="submit" disabled={!state.todo} onSubmit={submitHandle} className="btn btn-primary" style={{ alignItems:"end"}}>Ekle</button>
      </form>
      <ul>
        {state.todos.map((todo,index)=>(
          <li key={index} style={{listStyleType: "none"}}>
            {todo}
          </li>
        ))}
      </ul>
      </div>
 
)
}