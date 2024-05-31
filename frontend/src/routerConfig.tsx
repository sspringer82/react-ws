import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import List from './List';
import ExampleList from './examples/Params/List';
import Form from './Form';
import Detail from './examples/Params/Detail';

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
      {
        path: '/example',
        element: <ExampleList />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
    ],
  },
]);

export default routerConfig;
