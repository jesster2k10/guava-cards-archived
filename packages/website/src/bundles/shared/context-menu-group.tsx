import {Box} from '@chakra-ui/layout';
import {IContextMenuItem, ContextMenuItem} from './context-menu-item';

export interface IContextMenuGroup {
  key: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  items: IContextMenuItem[];
}

export interface ContextMenuGroupProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  items?: IContextMenuItem[];
  children?: React.ReactNode;
}

export const ContextMenuGroup = ({
  header,
  footer,
  items = [],
  children,
  ...props
}: ContextMenuGroupProps) => {
  return (
    <Box layerStyle="menu.group.wrapper">
      <Box layerStyle="menu.group.header">{header}</Box>
      <Box layerStyle="menu.group.items">
        {children
          ? children
          : items.map(item => <ContextMenuItem {...item} key={item.title} />)}
      </Box>
      <Box layerStyle="menu.group.footer">{footer}</Box>
    </Box>
  );
};
