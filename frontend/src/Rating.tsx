import { StarBorder, Star } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ReactElement } from 'react';
import { Book } from './Book';

type Props = {
  book: Book;
  onRate: (book: Book, rating: number) => void;
};

function Rating({ book, onRate }: Props): ReactElement {
  return (
    <>
      {Array(5)
        .fill('')
        .map((e, i) => {
          return (
            <IconButton onClick={() => onRate(book, i + 1)} key={i}>
              {book.rating < i + 1 ? <StarBorder /> : <Star />}
            </IconButton>
          );
        })}
    </>
  );
}

export default Rating;
