import React, { useEffect, useState } from 'react';
import { Book } from './Book';
import { fetchBooks } from './book.api';

const initialBooks: Book[] = [
  {
    id: '9780451524935',
    title: '1984',
    author: 'George Orwell',
    publishedDate: '1949-06-08',
    pages: 328,
    price: 9.99,
    rating: 3,
  },
  {
    id: '9780743273565',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedDate: '1925-04-10',
    pages: 180,
    price: 10.99,
    rating: 2,
  },
  {
    id: '9780140283334',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishedDate: '1960-07-11',
    pages: 281,
    price: 8.99,
    rating: 3,
  },
];

const List: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBooks()
      .then((data) => setBooks(data))
      .catch((serverError) => {
        setError(serverError);
      });
  }, []);

  let content: React.ReactNode | null = null;

  if (books.length === 0) {
    content = <div>Keine Daten</div>;
  } else {
    content = (
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <>
      <h1>List works</h1>
      {error && <div>{error.toString()}</div>}
      {content}
    </>
  );
};

export default List;
