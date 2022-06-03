import { ReactElement, lazy, Suspense } from 'react';
import './App.css';
import BooksProvider from './BooksProvider';
import NotFound from './NotFound';
import Navigation from './Navigation';
import { Routes, Navigate, Route } from 'react-router-dom';

const List = lazy(() => import('./List'));
const Form = lazy(() => import('./Form'));

function App(): ReactElement {
  return (
    <BooksProvider>
      <Navigation />
      <Routes>
        <Route
          path="/list"
          element={
            <Suspense fallback={<div>...loading</div>}>
              <List />
            </Suspense>
          }
        ></Route>
        <Route
          path="/edit/:id"
          element={
            <Suspense fallback={<div>...loading</div>}>
              <Form />
            </Suspense>
          }
        />
        <Route
          path="/new"
          element={
            <Suspense fallback={<div>...loading</div>}>
              <Form />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<div>...loading</div>}>
              <Navigate to="/list" />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>...loading</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BooksProvider>
  );
}

export default App;
