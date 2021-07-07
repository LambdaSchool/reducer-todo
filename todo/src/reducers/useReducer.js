export const initialState = {
 todoItem: []
};

export const todoListReducer = ( state, action ) => {
    switch(action.type) {
        case "ADD_ITEM" :
        return {
            todoItem: [
                ...state.todoItem,
                {todoItem: action.payload, completed: false}
            ]
        }
        case "DELETE_ITEM" :
            return {
                todoItem: []
            }
        case "COMPLETED" :
            return {
               todoItem: state.todoItem.map((todoItem, index) => {
                   return(
                    index === action.payload
                    ? {...todoItem, completed:!todoItem.completed}
                    : todoItem
                   )
               })
            }
        default:
            return state;
    }
}