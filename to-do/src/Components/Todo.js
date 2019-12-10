import React from 'react';
import {state} from '../reducers/todoReducers';


const Todo = (props) => {
    return (
        <div>
        {props.state.map(todo => {
            return (
                <div className='todo-card' key={todo.id}>
                    <p>{todo.item}</p>
                </div>
            )
        })}
        </div>
    )
}
export default Todo;