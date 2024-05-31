import { Controller, useForm } from 'react-hook-form';
import { Book } from './Book';
import { Button, TextField } from '@mui/material';
import useList from './useList';
import { fetchBooks, removeBook, createBook } from './book.api';
import { Link, useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const [, error, , save] = useList(false, fetchBooks, removeBook, createBook);
  const navigate = useNavigate();

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
    try {
      await save(data);
      reset();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <div style={{ backgroundColor: 'red' }}>
          Es ist ein Fehler aufgetreten
        </div>
      )}
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
      <Button type="reset" component={Link} to="/" color="secondary">
        abbrechen
      </Button>
    </form>
  );
};

export default Form;
