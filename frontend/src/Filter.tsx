import { Dispatch, SetStateAction } from 'react';

type Props = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  function handleSubmit() {}
  return <form onSubmit={handleSubmit}></form>;
};

export default Filter;
