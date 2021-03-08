/**
 * Created by Jesse Onolememen. 26/02/2021
 */

import {
  Box,
  BoxProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from '@chakra-ui/react';
import MdcMenuSwap from '@meronex/icons/mdc/MdcMenuSwap';
import {UserRow} from '../../bundles/users/row';

interface SidebarHeaderProps extends BoxProps {
  currentUser?: any;
  loggedIn?: boolean;
}

const SidebarHeader = ({
  currentUser,
  loggedIn,
  ...props
}: SidebarHeaderProps) => {
  return (
    <Box
      role="button"
      layerStyle="block"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      px={3}
      py={3}>
      <UserRow user={currentUser} fallbackToGuest />
      <MdcMenuSwap />
    </Box>
  );
};

export {SidebarHeader};
