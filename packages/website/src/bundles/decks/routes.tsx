import {PartialRouteObject} from 'react-router';
import {paths} from '../../application/paths';
import DeckPage from './pages/Deck';

export const decksRoutes: PartialRouteObject = {
  path: paths.decks.root,
  children: [
    {
      path: '/',
      element: <h1>Decks</h1>,
    },
    {
      path: paths.decks.child.new,
      element: <h1>New Deck</h1>,
    },
    {
      path: '/:deckId',
      element: <DeckPage />,
    },
    {
      path: '/:deckId/edit',
      element: <h1>Edit Deck Page</h1>,
    },
  ],
};
