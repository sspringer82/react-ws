import { IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Book } from "./Book";
import { Edit } from "@mui/icons-material";

type Props = {
  book: Book;
  onDelete: (id: string) => void;
};

const ListItem: React.FC<Props> = ({ book, onDelete }) => {
  return (
    <TableRow>
      <TableCell data-testid="title">{book.title}</TableCell>
      <TableCell data-testid="author">{book.author}</TableCell>
      <TableCell>
        <IconButton
          aria-label={`${book.title} löschen`}
          color="primary"
          onClick={() => onDelete(book.id)}
          data-testid="deleteButton"
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton aria-label={`${book.title} bearbeiten`} color="primary">
          <Edit />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;
