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
import ListItem from './ListItem';
import { Link, useNavigate } from 'react-router-dom';
import useBooks from './useBooks';

function List(): ReactElement {
  const { books, handleRate, handleDelete } = useBooks();
  const navigate = useNavigate();

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
                onEdit={() => navigate(`/edit/${book.id}`)}
                onRate={handleRate}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab component={Link} to="/new">
        <Add />
      </Fab>
    </>
  );
}

export default List;
