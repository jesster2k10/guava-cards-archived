import {Box, BoxProps} from '@chakra-ui/react';

export interface IContextMenuItem {
  title: string;
  hint?: string;
  Icon?: React.ComponentType;
  action?: () => void;
}

export interface ContextMenuItemProps
  extends IContextMenuItem,
    Omit<BoxProps, 'title' | 'action'> {}

export const ContextMenuItem = ({
  action,
  title,
  hint,
  Icon,
  ...props
}: ContextMenuItemProps) => {
  return (
    <Box
      role="button"
      onClick={action}
      onKeyDown={action}
      layerStyle="menu.item"
      {...props}>
      {Icon && (
        <Box mr={2}>
          <Icon />
        </Box>
      )}
      <Box>{title}</Box>
      <Box>{hint}</Box>
    </Box>
  );
};
