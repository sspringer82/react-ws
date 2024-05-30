import { produce } from 'immer';
import { useState, useEffect } from 'react';

export default function useList<T extends { id: string }>(
  fetcher: () => Promise<T[]>,
  remover: (id: string) => Promise<void>
): [T[], string, (id: string) => Promise<void>] {
  const [items, setItems] = useState<T[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetcher()
      .then((data) => setItems(data))
      .catch((serverError) => {
        setError(serverError);
      });
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

  return [items, error, handleDelete];
}
