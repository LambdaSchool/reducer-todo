import React, {useState, useReducer} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {initialTodos, toDoReducer} from "./reducers/todoReducer";


const App = () => {
  const [todos, dispatch] = useReducer(toDoReducer, initialTodos);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = e => {
    dispatch({ type: "ADD_TASK", payload: newTask });
    e.preventDefault();
  };

  const toggleCompleted = e => {
    dispatch({ type: "TOGGLE_COMPLETED" });
  };
  
  const handleChanges = e => {
    setNewTask(e.target.value);
    //console.log(e.target.value);
  };

  const clearCompleted = e => {
    dispatch({type: "CLEAR COMPLETED"});
    e.preventDefault();
  }

  return(
    <div className="App">
      <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        handleSubmit={handleSubmit}
        handleChanges={handleChanges}
        newTask={newTask}
        clearCompleted={clearCompleted} />
      </div>
      <Todo todos={todos} toggleCompleted={toggleCompleted}/>
    </div>
  )
}

export default App;