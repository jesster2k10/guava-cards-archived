/**
 * Created by Jesse Onolememen. 26/02/2021
 */

import {Avatar, Box, BoxProps, chakra} from '@chakra-ui/react';

interface Props extends BoxProps {
  user?: any;
  fallbackToGuest?: boolean;
}

const UserRow = ({user, fallbackToGuest = true, ...props}: Props) => {
  return (
    <Box d="flex" flexDir="row" alignItems="center" {...props}>
      <Avatar mr={3} size="xs" rounded="sm" />
      <Box d="flex" flexDir="column">
        <chakra.span>{user ? user.name : 'Guest User'}</chakra.span>
        <chakra.span fontSize="xs" color="secondary" fontWeight="regular">
          You are not signed in
        </chakra.span>
      </Box>
    </Box>
  );
};

export {UserRow};
