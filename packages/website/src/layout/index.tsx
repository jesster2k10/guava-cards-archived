import {Box} from '@chakra-ui/layout';
import {Sidebar} from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({children}: LayoutProps) => (
  <Box display="flex" width="100%" height="100%">
    <Sidebar />
    <Box flex="1" as="main" ml={Sidebar.WIDTH}>
      {children}
    </Box>
  </Box>
);
