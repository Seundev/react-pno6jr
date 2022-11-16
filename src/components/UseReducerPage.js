import React from 'react';
import countReducer from '../hooks/countReducer';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UseReducerPage = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
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
          <button
            className="usereducer-button"
            onClick={() => dispatch('increament')}
          >
            Increament
          </button>
          <button
            className="usereducer-button"
            onClick={() => dispatch('decreament')}
          >
            Decreament
          </button>

          <div className="result">{count}</div>

          <button
            className="usereducer-button"
            onClick={() => dispatch('setValue')}
          >
            multiply by 9
          </button>
          <button
            className="usereducer-button"
            onClick={() => dispatch('reset')}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerPage;
