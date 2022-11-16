import React from 'react';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CustomHookPage = () => {
  const counter = useCounter(0);
  const { value, decreament, setValue, increament, reset } = counter;

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
          </div>
          <div className="result">{value}</div>

          <div>
            <button
              className="customhook-button"
              onClick={() => setValue(value * 9)}
            >
              multiply value of 9
            </button>
            <button className="customhook-button" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHookPage;
