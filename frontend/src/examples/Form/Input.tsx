import { produce } from 'immer';
import { ChangeEvent, FormEvent, useState } from 'react';

type Data = {
  firstName: string;
  lastName: string;
};

const Input: React.FC = () => {
  const [state, setState] = useState<Data>({
    firstName: 'Klaus',
    lastName: 'Müller',
  });

  function handleSubmit(submitEvent: FormEvent) {
    submitEvent.preventDefault();

    console.log(state);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState((prevState) =>
      produce(prevState, (draft) => {
        draft[event.target.name as keyof Data] = event.target.value;
      })
    );
  }

  return (
    <div>
      <h1>Input works</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Vorname:
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nachname:
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>speichern</button>
      </form>
    </div>
  );
};

export default Input;
