import { useMyContext } from './Context';

const Child: React.FC = () => {
  const state = useMyContext();
  return <div>Hallo {state && state[0]}</div>;
};

export default Child;
