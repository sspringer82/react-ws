import { Book } from './Book';

const baseURL = import.meta.env.VITE_BACKEND_URL;

export async function fetchBook(id: string): Promise<Book> {
  const response = await fetch(`${baseURL}/books/${id}`);
  if (!response.ok) {
    throw new Error('Whoops, da ist was schief gelaufen');
  }
  return response.json();
}

export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch(`${baseURL}/books`);
  if (!response.ok) {
    throw new Error('Whoops, da ist was schief gelaufen');
  }
  return response.json();
}
