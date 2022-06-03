import { Delete, Edit } from '@mui/icons-material';
import { TableRow, TableCell, IconButton } from '@mui/material';
import { ReactElement } from 'react';
import { Book } from './Book';
import Rating from './Rating';

type Props = {
  book: Book;
  onDelete: (book: Book) => void;
  onEdit: (book: Book) => void;
  onRate: (book: Book, rating: number) => void;
};

function ListItem({ book, onDelete, onEdit, onRate }: Props): ReactElement {
  return (
    <TableRow>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.isbn}</TableCell>
      <TableCell>
        <Rating onRate={onRate} book={book} />
      </TableCell>
      <TableCell>
        <IconButton onClick={() => onDelete(book)}>
          <Delete />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton onClick={() => onEdit(book)}>
          <Edit />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default ListItem;
