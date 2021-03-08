import {ChakraProvider} from '@chakra-ui/react';
import {DatabaseProvider} from '@guava/core';
import {database} from '@guava/database';
import {PageMeta} from '../layout/page/meta';
import {theme} from '../theme';
import {Router} from './router';
import {Styles} from './styles';

const App = () => {
  return (
    <DatabaseProvider database={database}>
      <ChakraProvider theme={theme}>
        <PageMeta />
        <Router />
        <Styles />
      </ChakraProvider>
    </DatabaseProvider>
  );
};

export {App};
