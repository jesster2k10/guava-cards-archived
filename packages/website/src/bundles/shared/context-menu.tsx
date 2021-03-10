import React, {Children, useState, useRef, useCallback, useEffect} from 'react';
import {Box, SlideFade} from '@chakra-ui/react';
import {IContextMenuGroup, ContextMenuGroup} from './context-menu-group';
import {ContextMenuItem, IContextMenuItem} from './context-menu-item';

interface ContextMenuProps {
  children: React.ReactNode;
  items?: IContextMenuItem[];
  groups?: IContextMenuGroup[];
}

const ContextMenuContent = ({children}: {children: React.ReactNode}) => (
  <>{children}</>
);

const ContextMenu = ({children, items, groups}: ContextMenuProps) => {
  const childArray = Children.toArray(children);
  const childGroups = childArray.filter(
    (child: any) => child.type === ContextMenuGroup,
  );
  const childContent = childArray.filter(
    (child: any) =>
      child.type !== ContextMenuGroup || child.type === ContextMenuContent,
  );
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);

  const handleCloseMenu = useCallback(() => {
    if (menuOpen) setMenuOpen(false);
  }, [menuOpen, setMenuOpen]);

  const handleContextMenu = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      setX(event.pageX);
      setY(event.pageY);
      setMenuOpen(true);
    },
    [setX, setY, setMenuOpen],
  );

  useEffect(() => {
    const {current} = container;
    if (!current) return;

    document.addEventListener('click', handleCloseMenu);
    current.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('visibilitychange', handleCloseMenu);
    return () => {
      document.removeEventListener('click', handleCloseMenu);
      current.removeEventListener('contextmenu', handleContextMenu);
      document.addEventListener('visibilitychange', handleCloseMenu);
    };
  }, [handleCloseMenu, handleContextMenu, container]);

  return (
    <div ref={container}>
      {childContent}
      <SlideFade
        in={menuOpen}
        style={{
          top: y,
          left: x,
          position: 'absolute',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}>
        <Box layerStyle="menu.wrapper">
          {groups
            ? groups.map(group => (
                <ContextMenuGroup
                  items={group.items}
                  key={group.key}
                  header={group.header}
                  footer={group.footer}
                />
              ))
            : childGroups}
        </Box>
      </SlideFade>
    </div>
  );
};

ContextMenu.Children = ContextMenuContent;
ContextMenu.Group = ContextMenuGroup;
ContextMenu.Item = ContextMenuItem;

export {ContextMenu};
