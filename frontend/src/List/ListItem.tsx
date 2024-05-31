import { IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Book } from '../util/Book';
import { Link } from 'react-router-dom';
import { Edit } from '@mui/icons-material';

type Props = {
  book: Book;
  onDelete: (id: string) => void;
};

const ListItem: React.FC<Props> = ({ book, onDelete }) => {
  return (
    <TableRow>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>
        <IconButton
          aria-label={`${book.title} löschen`}
          color="primary"
          onClick={() => onDelete(book.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton
          aria-label={`${book.title} bearbeiten`}
          color="primary"
          component={Link}
          to={`/edit/${book.id}`}
        >
          <Edit />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;
