import { Draft, produce } from 'immer';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useBooksContext } from './BooksProvider';

export default function useList<T extends { id: string }>(
  initial: boolean,
  fetcher: () => Promise<T[]>,
  remover: (id: string) => Promise<void>,
  creator: (item: T) => Promise<T>
): [
  T[],
  string,
  (id: string) => Promise<void>,
  (item: T) => Promise<T | undefined>
] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useBooksContext() as any as [
    T[],
    Dispatch<SetStateAction<T[]>>
  ];
  const [error, setError] = useState('');

  useEffect(() => {
    if (initial) {
      fetcher()
        .then((data) => setItems(data))
        .catch((serverError) => {
          setError(serverError);
        });
    }
  }, [fetcher]);

  async function handleDelete(id: string): Promise<void> {
    try {
      await remover(id);
      setItems((prevItems) => {
        return produce(prevItems, (draft) => {
          const index = draft.findIndex((b) => b.id === id);
          draft.splice(index, 1);
        });
      });
    } catch (serverError) {
      setError(serverError as string);
    }
  }

  async function handleCreate(item: T): Promise<T | undefined> {
    try {
      const newItem = await creator(item);
      setItems((prevItems) => {
        return produce(prevItems, (draft) => {
          draft.push(newItem as Draft<T>);
        });
      });

      return newItem;
    } catch (serverError) {
      setError(serverError as string);
    }
  }

  return [items, error, handleDelete, handleCreate];
}
