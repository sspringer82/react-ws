import { useEffect, useState } from 'react';
import { Book } from '../Book';
import { fetchBook } from '../book.api';

const Server: React.FC = () => {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    (async () => {
      const data = await fetchBook('9780451524935');
      setBook(data);
    })();

    // fetchBook('9780451524935').then((data) => setBook(data));
  }, []);

  return (
    <>
      <h1>Server Works</h1>
      {book && <div>{book.title}</div>}
    </>
  );
};

export default Server;
