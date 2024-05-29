import { Book } from './Book';

export async function fetchBook(id: string): Promise<Book> {
  const response = await fetch(`http://localhost:3001/books/${id}`);
  if (!response.ok) {
    throw new Error('Whoops, da ist was schief gelaufen');
  }
  return response.json();
}
