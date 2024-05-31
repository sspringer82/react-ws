import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { BooksProvider } from './BooksProvider';
import List from './List';
import RouterExample from './examples/RouterExample';

const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
  },
  {
    path: '/example',
    element: <RouterExample />,
  },
]);

// function App() {
// const App: React.FC = function () {
// function App(): React.ReactNode {
const App: React.FC = () => {
  return (
    <BooksProvider>
      <RouterProvider router={router} />
    </BooksProvider>
  );
};

export default App;
