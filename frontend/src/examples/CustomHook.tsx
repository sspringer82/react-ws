import { useEffect, useState } from 'react';

function useMyHook(input: string): string[] {
  const [value, setValue] = useState(input);

  useEffect(() => {
    setTimeout(() => {
      setValue('new Value');
    }, 1000);
  }, []);

  // return value; // wenn nur ein Wert aus dem Hook relevant ist
  return [value]; // wenn ich immer alle Werte brauche
  // return {value: value}; // wenn ich nicht immer alle Werte brauche, sondern nur ganz bestimmte
}

const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
const arr3: (number | string)[] = [1, '2', 3];
const tupel: [string, number, string] = ['1', 2, '3'];

const CustomHook: React.FC = () => {
  const value = useMyHook('initial');

  return (
    <div>
      <h1>Custom Hook</h1>
      <div>{value}</div>
      <MySecondComponent />
    </div>
  );
};

export default CustomHook;

export const MySecondComponent: React.FC = () => {
  const value = useMyHook('initial');
  return <div>{value}</div>;
};
