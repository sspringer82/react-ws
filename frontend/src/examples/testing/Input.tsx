import { useState } from 'react';

const Input: React.FC = () => {
  const [state, setState] = useState('');

  return (
    <div>
      <div data-testid="output">{state}</div>
      <label>
        Input:
        <input
          data-testid="input"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
      </label>
    </div>
  );
};

export default Input;
