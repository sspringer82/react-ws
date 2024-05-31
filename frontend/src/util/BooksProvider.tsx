import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Book } from './Book';

// Context Type definieren - wie sieht die Struktur des Context aus?
type BooksContextType = [Book[], Dispatch<SetStateAction<Book[]>>] | null;

// Context erzeugen
const BooksContext = createContext<BooksContextType>(null);

// Provider erzeugen, der uns den Wert zur Verfügung stellt
type Props = {
  children: React.ReactNode;
};
const BooksProvider: React.FC<Props> = ({ children }) => {
  const state = useState<Book[]>([]);
  return (
    <BooksContext.Provider value={state}>{children}</BooksContext.Provider>
  );
};

// Hilfsfunktion erzeugen, die uns Zugriff auf den Context erlaubt
function useBooksContext(): BooksContextType {
  const context = useContext(BooksContext);

  if (context === null) {
    throw new Error('Du hast vergessen den Provider zu setzen');
  }

  return context;
}

export { BooksProvider, useBooksContext };
