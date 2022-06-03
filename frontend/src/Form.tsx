import { Box, Button, TextField } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { InputBook } from './Book';
import { Form as FormikForm, Formik, ErrorMessage } from 'formik';
import validationSchema from './validationSchema';
import { useParams, useNavigate } from 'react-router-dom';
import useBooks from './useBooks';

const initialBook: InputBook = {
  title: '',
  author: '',
  isbn: '',
};

function Form(): ReactElement {
  const [book, setBook] = useState<InputBook>(initialBook);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { handleSave } = useBooks();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/books/${id}`)
        .then((response) => response.json())
        .then((data) => setBook(data));
    }
  }, [id]);

  function onSave(book: InputBook) {
    handleSave(book);
    navigate('/');
  }
  function onCancel() {
    navigate('/');
  }

  return (
    <Formik
      initialValues={book}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(event, actions) => {
        onSave(event);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, handleChange, errors, resetForm }) => {
        return (
          <Box>
            <FormikForm>
              <div style={{ display: 'flexbox', flexDirection: 'column' }}>
                <TextField
                  label="Title"
                  value={values.title}
                  name="title"
                  onChange={handleChange}
                  margin="normal"
                  sx={{ border: errors.title ? '1px solid red' : 'none' }}
                />
                <ErrorMessage name="title" component="div" />
              </div>
              <div>
                <TextField
                  label="Author"
                  value={values.author}
                  name="author"
                  onChange={handleChange}
                  margin="normal"
                  sx={{ border: errors.title ? '1px solid red' : 'none' }}
                />
                <ErrorMessage name="author" component="div" />
              </div>
              <div>
                <TextField
                  label="ISBN"
                  value={values.isbn}
                  name="isbn"
                  onChange={handleChange}
                  margin="normal"
                  sx={{ border: errors.title ? '1px solid red' : 'none' }}
                />
                <ErrorMessage name="isbn" component="div" />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                save
              </Button>
              <Button
                onClick={() => {
                  resetForm();
                  onCancel();
                }}
              >
                cancel
              </Button>
            </FormikForm>
          </Box>
        );
      }}
    </Formik>
  );
}

export default Form;
