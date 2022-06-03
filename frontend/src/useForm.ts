import { useState } from 'react';
import { Book } from './Book';

type ReturnValue = {
  showForm: boolean;
  edit: Book | undefined;
  handleShowForm: (book?: Book) => void;
  hideForm: () => void;
};

function useForm(): ReturnValue {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState<Book | undefined>(undefined);

  function handleShowForm(book?: Book) {
    setEdit(book);
    setShowForm(true);
  }

  function hideForm() {
    setEdit(undefined);
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
