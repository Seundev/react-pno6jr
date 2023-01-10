import React from 'react';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CustomHookPage = () => {
  const counter = useCounter(0);
  const {
    inputRef,
    count,
    handleClick,
    multiply,
    decreament,
    increament,
    reset,
  } = counter;

  return (
    <div>
      <Helmet>
        <title>React counter project</title>
        <meta name="description" content="Seun's counter App" />
        <meta
          name="Keywords"
          content="Customhooks,React, Seun's project, Developer, Github "
        />
      </Helmet>

      <div className="link">
        <Link className="link-color" to="/">
          <button className="link-button">home</button>
        </Link>
        <Link className="link-color" to="/UseReducerPage">
          <button className="link-button">usereducer page</button>
        </Link>
        <br />
        <br />
      </div>

      <div className="main-counter-container">
        <div className="counter-container">
          <div>
            <button className="customhook-button" onClick={increament}>
              Increament
            </button>
            <button className="customhook-button" onClick={decreament}>
              Decreament
            </button>
            <button className="customhook-button" onClick={multiply}>
              multiply by 9
            </button>
          </div>
          <div className="result">{count}</div>

          <div>
            <p>
              <input ref={inputRef} type="number" />
              <button onClick={handleClick}>set value</button>
            </p>
          </div>

          <button
            className="customhook-reset-bttn"
            className="customhook-button"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomHookPage;
