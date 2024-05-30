import React, { useState } from 'react';
import ListItem from './ListItem';
import useList from './useList';
import { fetchBooks, removeBook } from './book.api';
import { Book } from './Book';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Filter from './Filter';

const List: React.FC = () => {
  const [books, error, handleDelete] = useList<Book>(fetchBooks, removeBook);

  const [filter, setFilter] = useState('');

  let content: React.ReactNode | null = null;
  if (books.length === 0) {
    content = <div>Keine Daten</div>;
  } else {
    content = (
      <>
        <div>
          Es gibt{' '}
          {
            books.filter((book) =>
              book.title.toLowerCase().includes(filter.toLowerCase())
            ).length
          }{' '}
          Bücher
        </div>
        <Filter filter={filter} setFilter={setFilter} />
        <TableContainer component={Card}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Titel</TableCell>
                <TableCell>Autor</TableCell>
                <TableCell></TableCell>
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
      {error && <div>{error.toString()}</div>}
      {content}
    </>
  );
};

export default List;
