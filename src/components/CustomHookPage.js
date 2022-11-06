import React from 'react';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';


const CustomHookPage = () => {
  const counter = useCounter(0);
  const { value, decreament, setValue, increament, reset } = counter;

  return (
    <>
      <Link to="/UseReducerPage">UseReducerPage</Link>

      <div className="counter-container">

        <div>
        <button className="button" onClick={decreament}>
          Decreament
        </button>
        <button className="button" onClick={() => setValue(value * 9)}>
          multiply value of 9
        </button>
        </div>
        <div className="result">{value}</div>
        <button className="button" onClick={increament}>
          Increament
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default CustomHookPage;
