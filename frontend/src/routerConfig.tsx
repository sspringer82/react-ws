import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import List from './List';
import Form from './Form';

const routerConfig = createBrowserRouter([
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

export default routerConfig;
