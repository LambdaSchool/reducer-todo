import React, { useState, useReducer } from "react";
import { Button, Form, Input } from "semantic-ui-react";

//components
import DeleteList from "./DeleteList";

//import reducer
import { initialState, todoListReducer } from "../reducers/useReducer";

function ItemForm() {
  const [todoItem, setTodoItem] = useState({
    userEntry: "",
  });

  const [state, dispatch] = useReducer(todoListReducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: todoItem.userEntry });
    setTodoItem({ userEntry: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodoItem({
      [name]: value,
    });
  };

  console.log("%c ReducerState:", "color:red", state.todoItem);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label />
          Add Item:
          <Input
            placeholder="Enter Item"
            type="text"
            name="userEntry"
            onChange={handleChange}
            value={todoItem.userEntry}
            style={{ marginTop: "10px" }}
          />
        </Form.Field>
        {state.todoItem.length > 0 && (
          <p className="itemCheckPopUp">Click on Item to check off list!</p>
        )}
        <Button type="submit" color="blue" style={{ marginBottom: "10px" }}>
          <i>Enter Item</i>
        </Button>
      </Form>
      {state.todoItem.map((item, index) => {
          console.log("item:",item)
        return <p
         className={`${item.completed ? "checkedOff": ""}`}
         onClick={() => dispatch({type: "COMPLETED", payload:index})}
         key={Math.random()}>{item.todoItem}</p>;
      })}
      {state.todoItem.length > 0 && (
        <DeleteList dispatch={dispatch}/>
      )}
    </>
  );
}

export default ItemForm;
