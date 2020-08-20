import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
//Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
// In Redux, all the application state is stored as a single object. It's a good idea to think of its shape before writing any code. What's the minimal representation of your app's state as an object?
// For our todo app, we want to store two different things:
// The currently selected visibility filter.
// The actual list of todos.
// You'll often find that you need to store some data, as well as some UI state, in the state tree. This is fine, but try to keep the data separate from the UI state.
export default combineReducers({
  todos,
  visibilityFilter
})