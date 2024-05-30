import { Button, Card, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

type Data = {
  firstname: string;
  lastname: string;
};

const HookForm: React.FC = () => {
  const { handleSubmit, control } = useForm<Data>({});

  function onSubmit(data: Data) {
    console.log(data);
  }

  return (
    <Card sx={{ padding: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstname"
          control={control}
          render={({ field }) => <TextField label="Vorname" {...field} />}
        />
        <br />
        <br />
        <Controller
          name="lastname"
          control={control}
          render={({ field }) => <TextField label="Nachname" {...field} />}
        />
        <br />
        <Button type="submit">speichern</Button>
      </form>
    </Card>
  );
};

export default HookForm;
