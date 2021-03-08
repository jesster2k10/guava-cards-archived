import {BrowserRouter, Outlet, useRoutes} from 'react-router-dom';
import {decksRoutes} from '../bundles/decks/routes';
import {Layout} from '../layout';
import {appRoutes} from '../pages/routes';

const RouterRoutes = () => {
  const element = useRoutes([decksRoutes, ...appRoutes]);

  return (
    <Layout>
      {element}
      <Outlet />
    </Layout>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <RouterRoutes />
    </BrowserRouter>
  );
};

export {Router};
