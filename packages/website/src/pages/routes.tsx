import {PartialRouteObject} from 'react-router';
import {NotFoundPage} from './not-found';

export const appRoutes: PartialRouteObject[] = [
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
