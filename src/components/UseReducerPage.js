import React from 'react';
import countReducer from '../hooks/countReducer';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UseReducerPage = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const setValue = (value) => dispatch({ type: 'setValue', value });

  return (
    <div>
      <Helmet>
        <title>React counter project</title>
        <meta name="description" content="Seun's useReducerPage App" />
        <meta
          name="Keywords"
          content="Customhooks,React, Seun's project, Developer, Github "
        />
      </Helmet>

      <div className="link">
        <Link to="/">
          <button className="link-button">home</button>
        </Link>
        <Link to="/customhookpage">
          <button className="link-button">custom hook page</button>
        </Link>
      </div>
      <div className="main-counter-container">
        <div className="counter-container-2">
          <div>
            <button
              className="usereducer-button"
              onClick={() => dispatch({ type: 'increment' })}
            >
              Increment
            </button>
            <button
              className="usereducer-button"
              onClick={() => dispatch({ type: 'decrement' })}
            >
              Decrement
            </button>
            <button
              className="usereducer-button"
              onClick={() => dispatch({ type: 'multiply' })}
            >
              mulitiply by 3
            </button>
          </div>
          <div className="result">{state.count}</div>

          <p>
            <input
              type="number"
              placeholder="input number"
              value={state.count}
              onChange={(e) => setValue(e.target.value)}
              onMouseOut={(e) => (e.target.value = '')}
            />
          </p>

          <button
            className="usereducer-button"
            onClick={() => dispatch({ type: 'reset' })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerPage;
