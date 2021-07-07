import React, {useReducer} from 'react'
import { List } from "semantic-ui-react";
import { todoListReducer, initialState } from '../reducers/useReducer';

function TodoItem({data, toggleItem}){

    const [state, dispatch] = useReducer(todoListReducer, initialState)

    return(
        <List size="big">
            <List.Item
             className={`${data.completed ? "checkedOff" : ""}`}
             onClick={()=> dispatch({type:"ITEM_COMPLETED-"})}
             >
            {data.item}
            </List.Item>
        </List>
    )
}

export default TodoItem