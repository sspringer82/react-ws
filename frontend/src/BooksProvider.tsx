import { ReactElement, useState } from 'react';
import { Book } from './Book';
import BooksContext from './BooksContext';

type Props = {
  children: ReactElement[];
};

function BooksProvider({ children }: Props): ReactElement {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <BooksContext.Provider value={[books, setBooks]}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProvider;
