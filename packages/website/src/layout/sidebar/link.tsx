/**
 * Created by Jesse Onolememen. 26/02/2021
 */

import {Box} from '@chakra-ui/react';
import {Link, LinkProps} from '~/shared/Link';

interface SidebarLinkProps extends LinkProps {
  title: string;
  Icon?: React.ComponentType;
  to: string;
}

const SidebarLink = ({title, Icon, to, ...props}: SidebarLinkProps) => {
  const icon = Icon ? <Icon /> : null;

  return (
    <Link
      to={to}
      layerStyle="block"
      py={2}
      mx={2}
      px={2}
      mb={0.5}
      w="auto"
      rounded="md"
      fontSize="0.85rem"
      d="flex"
      flexDir="row"
      alignItems="center"
      className="sidebar-link"
      exact={false}
      {...props}>
      {icon && <Box mr={2}>{icon}</Box>}
      <Box lineHeight={1}>{title}</Box>
    </Link>
  );
};

export {SidebarLink};
