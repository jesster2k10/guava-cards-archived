import {Box} from '@chakra-ui/react';
import {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {PageErrorFallback} from '~/shared/PageError';
import {Sidebar} from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
  const [retry, setRetry] = useState(false);

  return (
    <Box display="flex" width="100%" height="100%">
      <Sidebar />
      <ErrorBoundary
        FallbackComponent={PageErrorFallback}
        onReset={() => setRetry(false)}
        resetKeys={[retry]}>
        <Box flex="1" as="main" ml={Sidebar.WIDTH}>
          {children}
        </Box>
      </ErrorBoundary>
    </Box>
  );
};
