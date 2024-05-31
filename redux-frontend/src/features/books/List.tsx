import ListItem from "./ListItem";
import {
  Card,
  Fab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadBooks, removeBook, selectBooks, selectStatus } from "./booksSlice";
import { useEffect } from "react";

const List: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  function handleDelete(id: string) {
    dispatch(removeBook(id));
  }

  if (status === "loading") {
    return <div>lade...</div>;
  }

  let content: React.ReactNode | null = null;
  if (books.length === 0) {
    content = <div data-testid="noData">Keine Daten</div>;
  } else {
    content = (
      <>
        <div>
          Es gibt
          {books.length}
          Bücher
        </div>
        <TableContainer component={Card}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Titel</TableCell>
                <TableCell>Autor</TableCell>
                <TableCell colSpan={2}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map(book => (
                <ListItem key={book.id} book={book} onDelete={handleDelete} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  return (
    <>
      <h1>Unsere fröhliche Bücherliste📚</h1>
      {status === "failed" && <div>Es ist ein Fehler aufgetreten</div>}
      {content}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <Add />
      </Fab>
    </>
  );
};

export default List;
