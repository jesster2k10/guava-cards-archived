import {paths} from '@/application/paths';
import {PartialRouteObject} from 'react-router';
import {NewCardPage} from './pages/new';

export const cardsRoutes: PartialRouteObject = {
  path: paths.cards.root,
  children: [
    {
      path: '/',
      element: <h1>Cards</h1>,
    },
    {
      path: `${paths.cards.child.new}/:deckId`,
      element: <NewCardPage />,
    },
  ],
};
