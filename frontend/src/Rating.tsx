import { StarBorder, Star } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ReactElement } from 'react';
import { Book } from './Book';

type Props = {
  handleRate: (book: Book, rating: number) => void;
  book: Book;
};

function Rating({ book, handleRate }: Props): ReactElement {
  return (
    <>
      {Array(5)
        .fill('')
        .map((e, i) => {
          return (
            <IconButton onClick={() => handleRate(book, i + 1)} key={i}>
              {book.rating < i + 1 ? <StarBorder /> : <Star />}
            </IconButton>
          );
        })}
    </>
  );
}

export default Rating;
