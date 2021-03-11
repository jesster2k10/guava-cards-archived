import {ChakraProvider} from '@chakra-ui/react';
import {DatabaseProvider} from '@guava/core';
import {database} from '@guava/database';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {PageMeta} from '../layout/page/meta';
import {theme} from '../theme';
import {Router} from './Router';
import {persistor, store} from './store';
import {Styles} from './Styles';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <DatabaseProvider database={database}>
          <ChakraProvider theme={theme}>
            <PageMeta />
            <Router />
            <Styles />
          </ChakraProvider>
        </DatabaseProvider>
      </PersistGate>
    </Provider>
  );
};

export {App};
