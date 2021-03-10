import {Box, BoxProps, VisuallyHidden} from '@chakra-ui/react';
import React from 'react';

interface MenuActionProps extends BoxProps {
  Icon?: React.ComponentType;
  onClick: () => void;
  label: string;
  active?: boolean;
}

const MenuAction = (props: MenuActionProps) => {
  const {Icon, onClick, label, active, ...rest} = props;

  return (
    <Box
      {...(rest as any)}
      as="button"
      mr={1}
      p="0.35rem"
      rounded="sm"
      d="flex"
      alignItems="center"
      justifyContent="center"
      onClick={onClick}
      aria-label={label}
      bg={active ? 'altHover' : 'bg'}
      borderColor="borderLight"
      borderWidth={1}
      _focus={{outline: 'none'}}
      _hover={{bg: 'altHover'}}
      transition="var(--transition)">
      <VisuallyHidden>{label}</VisuallyHidden>
      {Icon ? <Icon /> : label}
    </Box>
  );
};

MenuAction.defaultProps = {
  Icon: null,
  active: false,
};

export {MenuAction};
