import React from 'react';
import ListItem from './ListItem';
import useList from './useList';
import { fetchBooks, removeBook } from './book.api';
import { Book } from './Book';

const List: React.FC = () => {
  const [books, error, handleDelete] = useList<Book>(fetchBooks, removeBook);

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
