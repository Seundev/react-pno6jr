import React from 'react';
import { useRef, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

// const MAX_COUNT_ALLOWED = 5;

export default function ErrorBoundary() {
  //useState for count...
  const [state, setState] = useState(0);
  const [history, setHistory] = useState('');

  //initializing errorHandler
  const HandleError = useErrorHandler();

  //increament, decreament and reset functions...

  if (state > 5) {
    throw new Error('Exceeded count!');
  }
  const Increament = () => {
    try {
      if (state === 5) {
        throw new Error('Exceeded count!');
      } else {
        setState(state + +1);
      }
    } catch (e) {
      HandleError(e);
    }
  };
  const Decreament = () => {
    setState(state - 1);
  };
  const Reset = (prev) => {
    if (prev === 0) {
      setHistory(0);
    } else {
      setHistory(state);
    }
    setState((prev = 0));
  };

  const inputRef = useRef(null);
  // const listHistory = history.map((number) => <li>{number}</li>);

  function handleClick() {
    setState(inputRef.current.value - 0);
  }
  //display
  return (
    <section className="main_container">
      <div>
        <h1>Error prone!</h1>
        <h3>
          Count limit for this counter is 5. Numbers above the set limit throw
          is error
        </h3>
        <p>
          <input ref={inputRef} type="number" id="message" name="message" />
          <button onClick={handleClick}>set value</button>
        </p>
        <div className="counter_label">Count: {state}</div>
        <button className="Action-btn" onClick={Increament}>
          Increament
        </button>
        <button className="Action-btn" onClick={Decreament}>
          Decreament
        </button>
        <button className="Action-btn" onClick={Reset}>
          reset
        </button>
        <p>Your last count beofore you reset was: {history}</p>
      </div>
    </section>
  );
}
