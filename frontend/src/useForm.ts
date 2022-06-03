import { useState } from 'react';
import { Book } from './Book';

type ReturnValue = {
  showForm: boolean;
  edit: Book | null;
  handleShowForm: (book: Book | null) => void;
  hideForm: () => void;
};

function useForm(): ReturnValue {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState<Book | null>(null);

  function handleShowForm(book: Book | null) {
    setEdit(book);
    setShowForm(true);
  }

  function hideForm() {
    setEdit(null);
    setShowForm(false);
  }

  return {
    showForm,
    edit,
    handleShowForm,
    hideForm,
  };
}

export default useForm;
