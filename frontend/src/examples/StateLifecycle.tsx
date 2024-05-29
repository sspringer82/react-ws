import { useEffect, useState } from 'react';

const StateLifecycle: React.FC = () => {
  const [book, setBook] = useState('Clean Code');

  useEffect(() => {
    setTimeout(() => {
      setBook('Herr der Ringe');
    }, 1000);
    return () => {
      console.log('unmount');
    };
  }, [book]);

  // kein dep array: bei jedem update der komponente (inkl. mount)
  // leeres dep array: nur beim mount
  // [book]: nur beim Update von book

  return (
    <div>
      <h1>It Works</h1>
      {book}
    </div>
  );
};

export default StateLifecycle;
