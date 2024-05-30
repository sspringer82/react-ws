import { Book } from './Book';

type Props = {
  book: Book;
  onDelete: (id: string) => void;
};

const ListItem: React.FC<Props> = ({ book, onDelete }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <button onClick={() => onDelete(book.id)}>löschen</button>
      </td>
    </tr>
  );
};

export default ListItem;
