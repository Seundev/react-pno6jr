import { useState } from 'react';

function useCounter(intitialValue) {
  const [value, setValue] = useState(intitialValue || 0);

  const decreament = () => setValue((prevValue) => prevValue - 1);
  const increament = () => setValue((prevValue) => prevValue + 1);
  const reset = () => setValue(intitialValue || 0);

  return {
    value,
    decreament,
    setValue,
    increament,
    reset,
  };
}

export default useCounter;