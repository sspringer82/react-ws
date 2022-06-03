import { Add } from '@mui/icons-material';
import {
  Fab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ReactElement } from 'react';
import Form from './Form';
import ListItem from './ListItem';
import useBooks from './useBooks';
import useForm from './useForm';

function List(): ReactElement {
  const { books, handleRate, handleDelete, handleSave } = useBooks();
  const { showForm, edit, handleShowForm, hideForm } = useForm();

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>ISBN</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {books.map((book) => (
              <ListItem
                key={book.id}
                book={book}
                onDelete={handleDelete}
                onEdit={handleShowForm}
                onRate={handleRate}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab onClick={() => handleShowForm(null)}>
        <Add />
      </Fab>
      {showForm && (
        <Form
          onSave={(book) => {
            handleSave(book);
            hideForm();
          }}
          book={edit}
          onCancel={hideForm}
        />
      )}
    </>
  );
}

export default List;
