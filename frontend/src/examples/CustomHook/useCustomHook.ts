import { useState } from 'react';

type ReturnValue = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

function useCustomHook(): ReturnValue {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  return {
    counter,
    increment,
    decrement,
  };
}

export default useCustomHook;
