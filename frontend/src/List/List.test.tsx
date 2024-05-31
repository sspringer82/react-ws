import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { setupServer } from 'msw/node';
import List from './List';
import { BooksProvider } from '../util/BooksProvider';
import { MemoryRouter } from 'react-router-dom';
import { HttpResponse, http } from 'msw';

const server = setupServer();

const testData = [
  {
    id: '9780451524935',
    title: '1984',
    author: 'George Orwell',
    publishedDate: '1949-06-08',
    pages: 328,
    price: 9.99,
    rating: 3,
  },
  {
    id: '9780743273565',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedDate: '1925-04-10',
    pages: 180,
    price: 10.99,
    rating: 2,
  },
  {
    id: '9780140283334',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishedDate: '1960-07-11',
    pages: 281,
    price: 8.99,
    rating: 3,
  },
];

describe('List', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should fetch and render', async () => {
    server.use(
      http.get('/api/books', () => {
        return HttpResponse.json(testData);
      })
    );

    render(
      <BooksProvider>
        <MemoryRouter>
          <List />
        </MemoryRouter>
      </BooksProvider>
    );

    await waitFor(() => screen.findAllByTestId('title'));
    const titles = screen.getAllByTestId('title');
    const authors = screen.getAllByTestId('author');

    expect(titles).toHaveLength(testData.length);
    expect(authors).toHaveLength(3);

    for (let i = 0; i < 3; i++) {
      expect(authors[i]).toHaveTextContent(testData[i].author);
    }

    expect(authors[1]).toHaveTextContent('F. Scott Fitzgerald');
  });

  it('should fetch and render no data', async () => {
    server.use(
      http.get('/api/books', () => {
        return HttpResponse.json([]);
      })
    );

    render(
      <BooksProvider>
        <MemoryRouter>
          <List />
        </MemoryRouter>
      </BooksProvider>
    );

    await waitFor(() => screen.findAllByTestId('noData'));

    expect(screen.getByTestId('noData')).toHaveTextContent('Keine Daten');
    expect(screen.queryByTestId('title')).toBe(null);
    expect(screen.queryByTestId('author')).toBe(null);
  });

  it('should fetch and show an error', async () => {
    server.use(
      http.get('/api/books', () => {
        return new HttpResponse(null, {
          status: 404,
          statusText: 'Out Of Apples',
        });
      })
    );

    render(
      <BooksProvider>
        <MemoryRouter>
          <List />
        </MemoryRouter>
      </BooksProvider>
    );

    await waitFor(() => screen.findAllByTestId('error'));

    expect(screen.getByTestId('error')).toHaveTextContent(
      'Whoops, da ist was schief gelaufen'
    );
  });

  it('should filter', async () => {
    server.use(
      http.get('/api/books', () => {
        return HttpResponse.json(testData);
      })
    );

    render(
      <BooksProvider>
        <MemoryRouter>
          <List />
        </MemoryRouter>
      </BooksProvider>
    );

    await waitFor(() => screen.findAllByTestId('title'));

    fireEvent.change(screen.getByTestId('filter'), {
      target: { value: '1984' },
    });

    expect(screen.getAllByTestId('title')).toHaveLength(1);
    expect(screen.getByTestId('title')).toHaveTextContent('1984');
  });
});
