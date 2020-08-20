import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

//The Store is the object that brings them together. The store has the following responsibilities:
// Holds application state;
// Allows access to state via getState();
// Allows state to be updated via dispatch(action);
// Registers listeners via subscribe(listener);
// Handles unregistering of listeners via the function returned by subscribe(listener).
// It's important to note that you'll only have a single store in a Redux application.
// const store = createStore(rootReducer)
//At this point can test console.log(store.getState())
const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
