import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../../Book';
import { fetchBook } from '../../book.api';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) {
      fetchBook(id).then((data) => setBook(data));
    }
  }, [id]);

  return (
    <>
      <h1>{book?.title}</h1>
      <div>{book?.author}</div>
    </>
  );
};

export default Detail;
