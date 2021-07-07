import React from "react";
import { Container, Header } from "semantic-ui-react";
//components:
import ItemForm from "./ItemForm";
// import TodoItem from './TodoItem';
// import DeleteList from './DeleteList'

function TodoWrapper() {
    // const objectLength = Object.keys(listData.itemData).length
  return (
    <Container>
      <Header>To Do List!</Header>
      {/* <ItemForm addItem={addItem} listData={listData}/> */}
      <ItemForm />
      {/* {
          listData.itemData.map((item) => {
              return (
                  <TodoItem data={item} key={item.id} toggleItem={toggleItem} />
              )
          })
      }
     {
         objectLength > 0 && <DeleteList deleteAll={deleteAll}/>
     } */}
    </Container>
  );
}

export default TodoWrapper;
