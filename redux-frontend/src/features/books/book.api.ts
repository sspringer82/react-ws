import type { Book } from "./Book";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export async function fetchBook(id: string): Promise<Book> {
  const response = await fetch(`${baseURL}/books/${id}`);
  if (!response.ok) {
    throw new Error("Whoops, da ist was schief gelaufen");
  }
  return response.json();
}

export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch(`${baseURL}/books`);
  if (!response.ok) {
    throw new Error("Whoops, da ist was schief gelaufen");
  }
  return response.json();
}

export async function removeBook(id: string): Promise<string> {
  const response = await fetch(`${baseURL}/books/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Whoops, da ist was schief gelaufen");
  }
  return id;
}

export async function createBook(book: Book): Promise<Book> {
  const response = await fetch(`${baseURL}/books/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error("Whoops, da ist was schief gelaufen");
  }

  return response.json();
}

export async function updateBook(book: Book): Promise<Book> {
  const response = await fetch(`${baseURL}/books/${book.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error("Whoops, da ist was schief gelaufen");
  }

  return response.json();
}
