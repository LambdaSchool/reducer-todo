export const initialState = {
    editing: false,
    title: 'Give your list a name ! '
  };
  
  export const titleReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'TOGGLE_EDITING':
        return {
          ...state,
          editing: !state.editing
        };
      case 'UPDATE_TITLE':
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      default:
        return state;
    }
  };
  
  console.log(titleReducer({ editing: false }, { type: 'TOGGLE_EDITING' }));
  