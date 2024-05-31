import { Button, TextField } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type Props = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  function handleSubmit(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Filter:
        <TextField
          label="filtern"
          type="text"
          value={filter}
          onChange={handleSubmit}
        />
        <Button type="submit">filtern</Button>
      </label>
    </form>
  );
};

export default Filter;
