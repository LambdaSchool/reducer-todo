import React, { useState, useReducer } from 'react';
import { titleReducer, initialState } from '../reducers/titleReducer';

const Title = () => {
  const [state, dispatch] = useReducer(titleReducer, initialState); 
  console.log(state, dispatch);
  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i
            onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: 'UPDATE_TITLE', payload: newTitleText });
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;
