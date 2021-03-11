import {Box, BoxProps, Text} from '@chakra-ui/react';
import isEmpty from 'lodash/isEmpty';
import React from 'react';

export interface ListItemComponent<T> {
  data: T;
  index?: number;
}

export type EmptyStateDisplay = 'inline' | 'block';

export interface ListProps<T> extends BoxProps {
  data: T[];
  keyExtractor: (item: T) => string;
  ItemComponent?: React.ComponentType<ListItemComponent<T>>;
  renderItem?: (item: T, index: number) => React.ReactElement;
  horizontal?: boolean;
  fallbackRender?: boolean;
  emptyStateDisplay?: EmptyStateDisplay;
  emptyStateMessage?: string;
}

export function List<T>({
  data = [],
  keyExtractor,
  ItemComponent,
  renderItem: propsRenderItem,
  horizontal,
  fallbackRender,
  emptyStateDisplay = 'inline',
  emptyStateMessage,
  ...props
}: ListProps<T>) {
  const isEmptyState = isEmpty(data);
  const renderItem = (item: T, index: number) => {
    if (propsRenderItem) {
      return propsRenderItem(item, index);
    }

    if (ItemComponent) {
      return (
        <ItemComponent key={keyExtractor?.(item)} data={item} index={index} />
      );
    }

    if (fallbackRender) {
      return (
        <div key={keyExtractor?.(item)}>
          {typeof item === 'string' ? item : JSON.stringify(item, null, 2)}
        </div>
      );
    }

    return null;
  };

  if (isEmptyState) {
    return <Text fontSize="sm">{emptyStateMessage}</Text>;
  }
  return (
    <Box
      d="flex"
      flexDir={horizontal ? 'row' : 'column'}
      flexWrap="wrap"
      {...props}>
      {data.map(renderItem)}
    </Box>
  );
}
