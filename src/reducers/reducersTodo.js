function reducer(state,action){
    switch(action.type){
      case 'SET_TODO':
        return{
          ...state,
          todo:action.value
        }
        case 'ADD_TODO':
          return{
            ...state,
            todo:'',
    
            todos:[
              ...state.todos,
              action.todo
            ]
          }
          case 'UPDATE_COMPLETED':
			     return {
			     	...state,
				    completed: action.value
		    	}
          case 'DELETE_TODO':
			    return {
				    ...state,
				    todos: [
				    ...state.todos.filter((todo, index) => index !== action.index)
				]
			}
    }
    
    }
export default reducer;