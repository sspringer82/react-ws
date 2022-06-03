import { ReactElement } from 'react';
import useCustomHook from './useCustomHook';

function CustomHook(): ReactElement {
  const { counter, increment, decrement } = useCustomHook();
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
