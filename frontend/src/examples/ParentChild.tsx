import { useState } from 'react';

type Person = {
  firstName: string;
  lastName: string;
};

const Parent: React.FC = () => {
  const [state, setState] = useState<Person[]>([
    { firstName: 'Klaus', lastName: 'Müller' },
    { firstName: 'Lisa', lastName: 'Meier' },
  ]);

  function handleRename(oldName: string, newName: string) {
    setState((prevState) => {
      return prevState.map((p) => {
        if (oldName === p.firstName) {
          return { ...p, firstName: newName };
        } else {
          return p;
        }
      });
    });
  }

  return (
    <div>
      <h1>Parent works</h1>
      {state.map((p) => (
        <Child key={p.firstName} person={p} rename={handleRename} />
      ))}
    </div>
  );
};

export default Parent;

type Props = {
  person: Person;
  rename: (oldName: string, newName: string) => void;
};

const Child: React.FC<Props> = ({ person, rename }) => {
  function handleClick() {
    rename(person.firstName, 'Martin');
  }

  return (
    <div>
      child works - {person.firstName}{' '}
      <button onClick={() => handleClick()}>rename</button>
    </div>
  );
};
