//Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
//Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed.
let nextTodoId = 0
//adding a new todo item
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
//added one more action type to describe a user ticking off a todo as completed. We refer to a particular todo by index because we store them in an array.
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
//It's a good idea to pass as little data in each action as possible. For example, it's better to pass index than the whole todo object.
//Finally, we'll add one more action type for changing the currently visible todos.
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}