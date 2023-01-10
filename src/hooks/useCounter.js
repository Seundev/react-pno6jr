import { useRef, useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  const inputRef = useRef();

  const decreament = () => setCount((prevValue) => prevValue - 1);
  const increament = () => setCount((prevValue) => prevValue + 1);
  const multiply = () => setCount((prevValue) => prevValue * 9);
  const reset = () => setCount(0);
  const handleClick = () => setCount(inputRef.current.value);

  return {
    count,
    decreament,
    inputRef,
    handleClick,
    increament,
    multiply,
    setCount,
    reset,
  };
}

export default useCounter;
