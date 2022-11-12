import React from 'react';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CustomHookPage = () => {
  const counter = useCounter(0);
  const { value, decreament, setValue, increament, reset } = counter;

  return (
    <>
      <Helmet>
        <title>React counter project</title>
        <meta name="description" content="Seun's counter App" />
        <meta
          name="Keywords"
          content="Customhooks,React, Seun's project, Developer, Github "
        />
      </Helmet>

      <div className="link">
        <Link className="link-color" to="/UseReducerPage">
          UseReducerPage
        </Link>
        <br />
        <br />
        <Link className="link-color" to="/">
          Home
        </Link>
      </div>

      <div className="counter-container">
        <div>
          <button className="customhook-button" onClick={decreament}>
            Decreament
          </button>
          <button
            className="customhook-button"
            onClick={() => setValue(value * 9)}
          >
            multiply value of 9
          </button>
        </div>
        <div className="result">{value}</div>
        <button className="customhook-button" onClick={increament}>
          Increament
        </button>
        <button className="customhook-button" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default CustomHookPage;
