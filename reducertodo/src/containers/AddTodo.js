import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// We will also need some container components to connect the presentational components to Redux. For example, the presentational TodoList component needs a container like VisibleTodoList that subscribes to the Redux store and knows how to apply the current visibility filter. To change the visibility filter, we will provide a FilterLink container component that renders a Link that dispatches an appropriate action on click:

// VisibleTodoList filters the todos according to the current visibility filter and renders a TodoList.
// FilterLink gets the current visibility filter and renders a Link.
// filter: string is the visibility filter it represents.

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input 
        ref={node => input = node}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
