import { RouterProvider } from 'react-router-dom';
import './App.css';
import { BooksProvider } from './util/BooksProvider';
import routerConfig from './util/routerConfig';

// function App() {
// const App: React.FC = function () {
// function App(): React.ReactNode {
const App: React.FC = () => {
  return (
    <BooksProvider>
      <RouterProvider router={routerConfig} />
    </BooksProvider>
  );
};

export default App;
