import { Controller, useForm } from 'react-hook-form';
import { Book } from './Book';
import { Button, TextField } from '@mui/material';

type Props = {
  save: (book: Book) => Promise<Book | undefined>;
};

const Form: React.FC<Props> = ({ save }) => {
  const { handleSubmit, control, reset } = useForm<Book>({
    defaultValues: {
      id: '',
      title: '',
      author: '',
      publishedDate: '',
      pages: 0,
      price: 0,
      rating: 0,
    },
  });

  async function onSubmit(data: Book) {
    await save(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="id"
          control={control}
          render={({ field }) => <TextField label="ISBN" {...field} />}
        />
      </div>
      <div>
        <Controller
          name="title"
          control={control}
          render={({ field }) => <TextField label="Titel" {...field} />}
        />
      </div>
      <div>
        <Controller
          name="author"
          control={control}
          render={({ field }) => <TextField label="Autor" {...field} />}
        />
      </div>
      <div>
        <Controller
          name="publishedDate"
          control={control}
          render={({ field }) => (
            <TextField label="Veröffentlichungsdatum" {...field} />
          )}
        />
      </div>
      <div>
        <Controller
          name="pages"
          control={control}
          render={({ field }) => <TextField label="Seiten" {...field} />}
        />
      </div>
      <div>
        <Controller
          name="price"
          control={control}
          render={({ field }) => <TextField label="Preis" {...field} />}
        />
      </div>
      <div>
        <Controller
          name="rating"
          control={control}
          render={({ field }) => <TextField label="Bewertung" {...field} />}
        />
      </div>
      <Button type="submit">speichern</Button>
    </form>
  );
};

export default Form;
