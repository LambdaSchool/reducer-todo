import React, { useReducer } from 'react';
import { TodoForm } from './components/todoForm';
import { TodoList } from './components/todoList';
import { initialState, reducer } from './Reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addTodo} />
      <button onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}>Clear Task</button>
    </div>
  );
}

export default App;