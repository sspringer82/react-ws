import './App.css';
import { BooksProvider } from './BooksProvider';
import Form from './Form';
import List from './List';

// function App() {
// const App: React.FC = function () {
// function App(): React.ReactNode {
const App: React.FC = () => {
  return (
    <BooksProvider>
      <List />
      <hr />
      <Form />
    </BooksProvider>
  );
};

export default App;
