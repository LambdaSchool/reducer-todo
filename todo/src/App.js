import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import useStyles from './components/useStyles'
import TodoForm from "./components/TodoForm";

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar
        className={classes.appBar}
        position="sticky"
      >
        <Toolbar color="inherit">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <DehazeIcon />
          </IconButton>
          <h1>Pop Todo!</h1>
        </Toolbar>
      </AppBar>
      <TodoForm />
    </div>
  );
}

export default App;
