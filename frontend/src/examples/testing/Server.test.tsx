import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Server from './Server';

import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';

const server =
  setupServer();
  // http.get('https://google.de', () => {
  //   return HttpResponse.json([
  //     { id: 1, name: 'Peter' },
  //     { id: 2, name: 'Lisa' },
  //     { id: 3, name: 'Klaus-Dieter' },
  //   ]);
  // })

describe('Server', () => {
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
      http.get('https://google.de', () => {
        return HttpResponse.json([
          { id: 1, name: 'Peter' },
          { id: 2, name: 'Lisa' },
          { id: 3, name: 'Klaus-Dieter' },
        ]);
      })
    );

    render(<Server />);

    await waitFor(() => screen.findAllByTestId('person'));

    const persons = screen.getAllByTestId('person');
    expect(persons).toHaveLength(3);

    expect(persons[0]).toHaveTextContent('Peter');
  });
});
