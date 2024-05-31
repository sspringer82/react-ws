import { RouterProvider } from 'react-router-dom';
import './App.css';
import { BooksProvider } from './BooksProvider';
import routerConfig from './routerConfig';

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
