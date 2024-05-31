import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import ListItem from './ListItem';
import { MemoryRouter } from 'react-router-dom';
import { Book } from '../util/Book';

const testBook: Book = {
  id: '9780451524935',
  title: '1984',
  author: 'George Orwell',
  publishedDate: '1949-06-08',
  pages: 328,
  price: 9.99,
  rating: 3,
};

describe('ListItem', () => {
  it('should render title and author', () => {
    render(
      <MemoryRouter>
        <table>
          <tbody>
            <ListItem book={testBook} onDelete={vi.fn()} />
          </tbody>
        </table>
      </MemoryRouter>
    );

    expect(screen.getByTestId('title')).toHaveTextContent('1984');
    expect(screen.getByTestId('author')).toHaveTextContent('George Orwell');
  });

  it('should delete the book', () => {
    const deleteCb = vi.fn();
    render(
      <MemoryRouter>
        <table>
          <tbody>
            <ListItem book={testBook} onDelete={deleteCb} />
          </tbody>
        </table>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('deleteButton'));

    expect(deleteCb).toHaveBeenCalledWith('9780451524935');
  });
});
