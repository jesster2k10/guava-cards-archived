import { AuthProvider } from '@/context/auth';
import { wrap, wrapComponent } from '@/__test__/wrap';
import { ChakraProvider } from '@chakra-ui/react';
import { createTestDatabase, DatabaseProvider } from '@guava/database';
import { render, waitFor } from '@testing-library/react';
import { Sidebar } from '..';

const database = createTestDatabase();

describe('Components | Sidebar', () => {
  const createDecks = async () => {
    await database.action(async () => {
      await database.collection('decks').create(deck => {
        deck.name = 'Quantum Physics';
        deck.emoji = '⚛️';
      });

      await database.collection('decks').create(deck => {
        deck.name = 'Organic Chemistry';
        deck.detail = 'OChem 2021';
        deck.emoji = '🧪';
      });
    });
  };

  it('should render all the decks', async () => {
    const screen = render(wrapComponent(Sidebar, { database }));
    expect(screen.getByText(/quantum physics/i)).not.toBeInTheDocument();
    expect(screen.getByText(/organic chemistry/i)).not.toBeInTheDocument();
    await createDecks();
    await waitFor(() => screen.getAllByTestId('deck-item'));
    expect(screen.getByText(/quantum physics/i)).toBeInTheDocument();
    expect(screen.getByText(/organic chemistry/i)).toBeInTheDocument();
  });

  it('should link to home');
  it('should show a guest user');
  it('should');
});
