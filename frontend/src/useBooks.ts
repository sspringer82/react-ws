import produce from 'immer';
import { useEffect, useContext } from 'react';
import { Book, InputBook } from './Book';
import BooksContext from './BooksContext';

type ReturnValue = {
  books: Book[];
  handleRate: (book: Book, rating: number) => void;
  handleDelete: (book: Book) => void;
  handleSave: (book: InputBook) => void;
};

function useBooks(): ReturnValue {
  const [books, setBooks] = useContext(BooksContext);

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, [setBooks]);

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
      });
  }

  return {
    books,
    handleRate,
    handleDelete,
    handleSave,
  };
}

export default useBooks;
