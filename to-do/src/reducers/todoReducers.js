export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: Date.now(),
    itemArray:[]
},

{
    item: 'Learn about redux',
    completed: false,
    id: Date.now(),
    itemArray:[]
}
]

export const reducer = (action, state) => {
   
    switch(action.type) {
       case 'ADD_TODO':
            const newItem ={
                item: action.payload,
                completed: false,
                id: Date.now()
            };

            return [...state, newItem];
           
            
            case 'TOGGLE_COMPLETED':
                    return state.map(todo => {
                        if(todo.id === action.payload) {
                            return { ...todo, completed: !todo.completed }
                        } else {
                            return todo
                        }
                    })

            default:
                return state;
                
    }
};
