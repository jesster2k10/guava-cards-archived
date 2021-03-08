import {Box, SlideFade} from '@chakra-ui/react';
import {useCallback, useEffect, useRef, useState} from 'react';

export interface ContextMenuItem {
  title: string;
  hint?: string;
  Icon?: React.ComponentType;
  action?: () => void;
}

export interface ContextMenuGroup {
  key: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  items: ContextMenuItem[];
}

interface ContextMenuProps {
  children: React.ReactNode;
  items?: ContextMenuItem[];
  groups?: ContextMenuGroup[];
}

const ContextMenu = ({
  children,
  items = [],
  groups: propsGroups,
}: ContextMenuProps) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);
  const groups: ContextMenuGroup[] =
    propsGroups ?? [{items, key: 'default'}] ?? [];

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
    const current = container.current;
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
      {children}
      <SlideFade
        in={menuOpen}
        style={{
          top: y,
          left: x,
          position: 'absolute',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}>
        <Box layerStyle="menu.wrapper">
          {groups.map(group => (
            <Box key={group.key} layerStyle="menu.group.wrapper">
              {group.header && (
                <Box layerStyle="menu.group.header">{group.header}</Box>
              )}
              <Box layerStyle="menu.group.items">
                {group.items.map((item, index) => (
                  <Box
                    role="button"
                    onClick={item.action}
                    tabIndex={index}
                    onKeyDown={item.action}
                    layerStyle="menu.item">
                    {item.Icon && (
                      <Box mr={2}>
                        <item.Icon />
                      </Box>
                    )}
                    <Box>{item.title}</Box>
                    <Box>{item.hint}</Box>
                  </Box>
                ))}
              </Box>
              <Box layerStyle="menu.group.footer">{group.footer}</Box>
            </Box>
          ))}
        </Box>
      </SlideFade>
    </div>
  );
};

export {ContextMenu};
