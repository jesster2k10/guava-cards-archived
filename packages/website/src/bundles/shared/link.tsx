import {chakra, LinkProps as ChakraLinkProps} from '@chakra-ui/react';
import {
  NavLink as RouterLink,
  NavLinkProps as RouterLinkProps,
} from 'react-router-dom';

export type LinkProps = Omit<RouterLinkProps, 'end'> &
  Omit<ChakraLinkProps, 'as' | 'href'> & {
    exact?: boolean;
  };

const ChakraLink = chakra(RouterLink);

const Link = ({activeClassName = 'active', exact, ...props}: LinkProps) => {
  return (
    <ChakraLink end={exact} activeClassName={activeClassName} {...props} />
  );
};

export {Link};
