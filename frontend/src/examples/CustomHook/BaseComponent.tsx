import { ReactElement, useState } from 'react';

function CustomHook(): ReactElement {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={() => decrement()}>decrement</button>
        <button onClick={() => increment()}>increment</button>
      </div>
    </div>
  );
}

export default CustomHook;
