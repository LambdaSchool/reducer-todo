import React from 'react'
import { Button } from "semantic-ui-react";


function DeleteList({dispatch}){
    return(
        <Button
            color="red"
            onClick={() => dispatch({ type: "DELETE_ITEM"})}
            style={{marginTop:"8px"}}
            className="shake-clunk"
        >Clear List</Button>
    )
}

export default DeleteList