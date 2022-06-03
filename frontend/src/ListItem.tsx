import { Delete, Edit } from '@mui/icons-material';
import { TableRow, TableCell, IconButton } from '@mui/material';
import { ReactElement } from 'react';
import { Book } from './Book';
import Rating from './Rating';

type Props = {
  book: Book;
  handleRate: (book: Book, rating: number) => void;
  handleDelete: (book: Book) => void;
  handleShowForm: (book: Book | null) => void;
};

function ListItem({
  book,
  handleRate,
  handleDelete,
  handleShowForm,
}: Props): ReactElement {
  return (
    <TableRow>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.isbn}</TableCell>
      <TableCell>
        <Rating book={book} handleRate={handleRate} />
      </TableCell>
      <TableCell>
        <IconButton onClick={() => handleDelete(book)}>
          <Delete />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton onClick={() => handleShowForm(book)}>
          <Edit />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default ListItem;
