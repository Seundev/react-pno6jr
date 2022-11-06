import React from 'react';
import countReducer from '../hooks/countReducer';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';

const UseReducerPage = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <Link className="link-color" to="/">CustomHookPage</Link>

      <div className="counter-container">
        <button className="button" onClick={() => dispatch('decreament')}>
          Decreament
        </button>
        <button className="button" onClick={() => dispatch('setValue')}>
          multiply by 9
        </button>
        <div className="result">{count}</div>
        <button className="button" onClick={() => dispatch('increament')}>
          Increament
        </button>
        <button className="button" onClick={() => dispatch('reset')}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducerPage;
