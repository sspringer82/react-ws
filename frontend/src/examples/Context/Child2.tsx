import { useEffect } from 'react';
import { useMyContext } from './Context';

const Child2: React.FC = () => {
  const state = useMyContext();
  useEffect(() => {
    setTimeout(() => {
      state && state[1]('neuer Wert');
    }, 2000);
  }, []);
  return <div>Hallo {state && state[0]}</div>;
};

export default Child2;
