import { Box, Button, TextField } from '@mui/material';
import { ReactElement } from 'react';
import { InputBook } from './Book';
import { Form as FormikForm, Formik, ErrorMessage } from 'formik';
import validationSchema from './validationSchema';

type Props = {
  book?: InputBook;
  onSave: (book: InputBook) => void;
  onCancel: () => void;
};

const initialBook: InputBook = {
  title: '',
  author: '',
  isbn: '',
};

function Form({ book = initialBook, onSave, onCancel }: Props): ReactElement {
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
                  sx={{ border: errors.author ? '1px solid red' : 'none' }}
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
                  sx={{ border: errors.isbn ? '1px solid red' : 'none' }}
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
