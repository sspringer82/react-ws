import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { BooksProvider } from './BooksProvider';
import List from './List';
import Form from './Form';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <List />,
      },
      {
        path: '/new',
        element: <Form />,
      },
    ],
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
