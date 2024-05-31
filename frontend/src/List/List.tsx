import React, { useState } from 'react';
import ListItem from './ListItem';
import useList from '../util/useList';
import {
  createBook,
  fetchBooks,
  removeBook,
  updateBook,
} from '../api/book.api';
import { Book } from '../util/Book';
import {
  Card,
  Fab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Filter from './Filter';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';

const List: React.FC = () => {
  const [books, error, handleDelete] = useList<Book>(
    true,
    fetchBooks,
    removeBook,
    createBook,
    updateBook
  );

  const [filter, setFilter] = useState('');

  let content: React.ReactNode | null = null;
  if (books.length === 0) {
    content = <div data-testid="noData">Keine Daten</div>;
  } else {
    content = (
      <>
        <div>
          Es gibt
          {
            books.filter((book) =>
              book.title.toLowerCase().includes(filter.toLowerCase())
            ).length
          }
          Bücher
        </div>
        <Filter filter={filter} setFilter={setFilter} />
        <TableContainer component={Card}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Titel</TableCell>
                <TableCell>Autor</TableCell>
                <TableCell colSpan={2}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books
                .filter((book) =>
                  book.title.toLowerCase().includes(filter.toLowerCase())
                )
                .map((book) => (
                  <ListItem key={book.id} book={book} onDelete={handleDelete} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  return (
    <>
      <h1>Unsere fröhliche Bücherliste📚</h1>
      {error && <div data-testid="error">{error.toString()}</div>}
      {content}
      <Fab
        color="primary"
        aria-label="add"
        component={Link}
        to="/new"
        sx={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        <Add />
      </Fab>
    </>
  );
};

export default List;
