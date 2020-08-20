// remember that the reducer must be pure. Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
// gradually teach the reducer to understand the actions we defined earlier.

const todos = (state = [], action) => {
  switch (action.type) {
    //We have two more actions to handle! Just like we did with SET_VISIBILITY_FILTER, we'll import the ADD_TODO and TOGGLE_TODO actions and then extend our reducer to handle ADD_TODO.
    //Just like before, we never write directly to state or its fields, and instead we return new objects. The new todos is equal to the old todos concatenated with a single new item at the end. The fresh todo was constructed using the data from the action.
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
//Note that each of these reducers is managing its own part of the global state. The state parameter is different for every reducer, and corresponds to the part of the state it manages.