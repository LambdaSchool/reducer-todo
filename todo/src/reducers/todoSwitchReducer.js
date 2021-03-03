//useReducer takes in two arguments state and action. setting up a reducer 
//involves initializing state and setting up a switch statement that handles all expected cases of state change

//Initial State
export const initialState = [
  {
    task: 'Keep Calm.. and POP',
    id: 1,
    completed: false
  }
];

//reducer taking in state and action from useReducer
export const todoReducer = (state, action) => {
  //Switch statement takes in action.type ('ADD_TODO, 'TOGGLE_EDITING', 'CLEAR_COMPLETED') as cases and returns one 
  //three processes
  switch(action.type) {
      //ADD a new todo by taking state, making a shallow copy and appending a new item to state using same format as initial state
      case('ADD_TODO'):
          return [...state,
              {
                  task: action.payload,
                  id: Date.now(),
                  completed: false
              }]
      //TOGGLE editing maps through state and if the todo.id === action.payload then create a shallow copy of the item and complete: not item.completed. 
      //otherwise return the item
      case('TOGGLE_EDITING'):
          return state.map(item => {
              if(item.id === action.payload) {
                  return {
                      ...item,
                      completed: !item.completed
                  }
              } else {
                  return item
              }
          })
      //CLEAR filters through state and takes the item and makes it go by bye. 
      case('CLEAR_COMPLETED'):
          return state.filter(item => !item.completed)
      default:
          return state
  }
}