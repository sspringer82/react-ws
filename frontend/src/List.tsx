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
import { ReactElement, useEffect, useState } from 'react';
import { Book, InputBook } from './Book';
import produce from 'immer';
import Form from './Form';
import ListItem from './ListItem';

function List(): ReactElement {
  const [books, setBooks] = useState<Book[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState<Book | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  function handleRate(book: Book, rating: number): void {
    fetch(`http://localhost:3001/books/${book.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...book, rating }),
    }).then(() => {
      setBooks((prevState) => {
        return produce(prevState, (draftState) => {
          draftState.map((draftBook) => {
            if (draftBook.id === book.id) {
              draftBook.rating = rating;
            }
            return draftBook;
          });
        });
      });
    });
  }

  function handleDelete(book: Book): void {
    if (window.confirm('are you sure?')) {
      fetch(`http://localhost:3001/books/${book.id}`, {
        method: 'DELETE',
      }).then(() => {
        setBooks((prevState) => {
          return produce(prevState, (draftState) => {
            return draftState.filter((draftBook) => draftBook.id !== book.id);
          });
        });
      });
    }
  }

  function handleShowForm(book: Book | null) {
    setEdit(book);
    setShowForm(true);
  }

  function handleSave(book: InputBook) {
    let url = 'http://localhost:3001/books';
    const config = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(book),
    };
    if (book.id) {
      config.method = 'PUT';
      url += `/${book.id}`;
    }
    fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        setBooks((prevState) =>
          produce(prevState, (draftState) => {
            if (book.id) {
              return draftState.map((draftBook) =>
                draftBook.id === data.id ? data : draftBook
              );
            } else {
              draftState.push(data);
            }
          })
        );
        hideForm();
      });
  }

  function hideForm() {
    setEdit(null);
    setShowForm(false);
  }

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
                handleDelete={handleDelete}
                handleShowForm={handleShowForm}
                handleRate={handleRate}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab onClick={() => handleShowForm(null)}>
        <Add />
      </Fab>
      {showForm && <Form onSave={handleSave} book={edit} onCancel={hideForm} />}
    </>
  );
}

export default List;
