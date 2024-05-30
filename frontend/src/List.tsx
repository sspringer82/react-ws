import React, { useEffect, useState } from 'react';
import { Book } from './Book';
import { fetchBooks, removeBook } from './book.api';
import ListItem from './ListItem';

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

  async function handleDelete(id: string): Promise<void> {
    try {
      await removeBook(id);
      setBooks((prevBooks) => {
        return prevBooks.filter((b) => b.id !== id);
      });
    } catch (serverError) {
      setError(serverError as string);
    }
  }

  let content: React.ReactNode | null = null;

  if (books.length === 0) {
    content = <div>Keine Daten</div>;
  } else {
    content = (
      <>
        <div>Es gibt {books.length} Bücher</div>
        <table>
          <thead>
            <tr>
              <th>Titel</th>
              <th>Autor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <ListItem key={book.id} book={book} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
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
