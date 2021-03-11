import {Box, BoxProps, Tooltip, VisuallyHidden} from '@chakra-ui/react';
import React from 'react';
import {useEditor} from './context';

interface MenuActionProps extends BoxProps {
  Icon?: React.ComponentType;
  onClick: () => void;
  label: string;
  active?: boolean;
}

const MenuAction = (props: MenuActionProps) => {
  const {Icon, onClick, label, active, ...rest} = props;
  const editor = useEditor();
  const isVisible = editor.isFocused;

  return (
    <Tooltip
      isDisabled={!isVisible}
      pointerEvents={isVisible ? 'auto' : 'none'}
      label={label}
      fontSize="xs"
      placement="top"
      hasArrow>
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
        pointerEvents={isVisible ? 'auto' : 'none'}
        _focus={{outline: 'none'}}
        _hover={{bg: 'altHover'}}
        transition="var(--transition)">
        <VisuallyHidden>{label}</VisuallyHidden>
        {Icon ? <Icon /> : label}
      </Box>
    </Tooltip>
  );
};

MenuAction.defaultProps = {
  Icon: null,
  active: false,
};

export {MenuAction};
