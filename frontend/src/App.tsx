import { ReactElement } from 'react';
import './App.css';
import BooksProvider from './BooksProvider';
import MyForm from './examples/Formik/MyForm';
import List from './List';
import Navigation from './Navigation';

function App(): ReactElement {
  return (
    <BooksProvider>
      <Navigation />
      <List />
    </BooksProvider>
  );
}

export default App;
