import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Title from './Title'
import './App.css';
import styled from 'styled-components';

const Wrapperdiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
// I see the following presentational components and their props emerge from this brief:

// TodoList is a list showing visible todos.
// todos: Array is an array of todo items with { id, text, completed } shape.
// onTodoClick(id: number) is a callback to invoke when a todo is clicked.
// Todo is a single todo item.
// text: string is the text to show.
// completed: boolean is whether the todo should appear crossed out.
// onClick() is a callback to invoke when the todo is clicked.
// Link is a link with a callback.
// onClick() is a callback to invoke when the link is clicked.
// Footer is where we let the user change currently visible todos.
// App is the root component that renders everything else.
// They describe the look but don't know where the data comes from, or how to change it. They only render what's given to them. If you migrate from Redux to something else, you'll be able to keep all these components exactly the same. They have no dependency on Redux.

const App = () => (
  <div>
    <Title />
    <Wrapperdiv>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    </Wrapperdiv>
  </div>
)
export default App