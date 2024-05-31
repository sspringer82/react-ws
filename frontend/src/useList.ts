import { Draft, produce } from 'immer';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useBooksContext } from './BooksProvider';
import { useLocation } from 'react-router-dom';

export default function useList<T extends { id: string }>(
  initial: boolean,
  fetcher: () => Promise<T[]>,
  remover: (id: string) => Promise<void>,
  creator: (item: T) => Promise<T>,
  updateor: (item: T) => Promise<T>
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
  const location = useLocation();

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

  async function handleSave(item: T): Promise<T | undefined> {
    if (location.pathname.startsWith('/edit')) {
      return handleUpdate(item);
    } else {
      handleCreate(item);
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
      throw serverError;
    }
  }

  async function handleUpdate(item: T): Promise<T | undefined> {
    try {
      const updatedItem = await updateor(item);
      setItems((prevItems) => {
        return produce(prevItems, (draft) => {
          const index = draft.findIndex((d) => d.id === updatedItem.id);
          draft[index] = updatedItem as Draft<T>;
        });
      });

      return updatedItem;
    } catch (serverError) {
      setError(serverError as string);
      throw serverError;
    }
  }

  return [items, error, handleDelete, handleSave];
}
