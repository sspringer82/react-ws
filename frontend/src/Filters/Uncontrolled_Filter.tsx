import { Button, TextField } from '@mui/material';
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react';

type Props = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFilter(inputRef.current!.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Filter: <TextField label="filtern" type="text" inputRef={inputRef} />
        <Button type="submit">filtern</Button>
      </label>
    </form>
  );
};

export default Filter;
