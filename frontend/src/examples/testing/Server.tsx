import { useEffect, useState } from 'react';

type Person = {
  id: number;
  name: string;
};

const Server: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    fetch('https://google.de/')
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, []);

  return (
    <ul>
      {persons.map((p) => (
        <li key={p.id} data-testid="person">
          {p.name}
        </li>
      ))}
    </ul>
  );
};

export default Server;
