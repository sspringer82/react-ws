import { Button, TextField } from '@mui/material';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

type Props = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  const [input, setInput] = useState(filter);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFilter(input);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Filter:{' '}
        <TextField
          label="filtern"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button type="submit">filtern</Button>
      </label>
    </form>
  );
};

export default Filter;
