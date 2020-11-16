// import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import React, { useState, useReducer } from "react";
 

import {

  initTodoState,
  todoReducer,
  TOGGLE_DONE,
  ADD_TODO

} from "./reducers/todoReducer";
/* 
 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

*/

const todolist = [
  {
    item: 'Edit Individual Todos',
    id: 1528817077286,
    completed: false
  },
  {
    item: 'Brush Teeth',
    id: 1528817084358,
    completed: false
  }
];


const   App = () =>{

  const [newTodoText, setNewTodoText] = useState([todolist]);
  const [state, dispatch] = useReducer(todoReducer, initTodoState);
  const [sub,setSub] = useState(false);



  const handleSubmit = (subState) =>{
    // e.preventDefault();

    setNewTodoText(subState); // TODO: Renders first undefined, then is one render off
    console.log('right',newTodoText)
    dispatch({
      type: ADD_TODO,
      payload: subState
  })
  todolist.push({item:subState, id: Date(), completed: false})
  // setSub(!sub)
  }


    return (
      <div className="App">
       {" ⌛ 😭 ⏰ ⌛ ⛺ "}
       <h1>
            <i
              className="far fa-edit"
              onClick={() => {  
                dispatch({ type: TOGGLE_DONE });
              }}
            />

        </h1>

              
       <TodoList dispatch={dispatch}key={todolist.id}todolist={todolist} />
       <TodoForm  handleSubmit={handleSubmit} />
      </div>
    );
  
}

export default App;
