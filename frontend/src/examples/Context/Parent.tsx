import Child from './Child';
import Child2 from './Child2';

const Parent: React.FC = () => {
  return (
    <div>
      Hallo
      <Child />
      <Child2 />
    </div>
  );
};

export default Parent;
