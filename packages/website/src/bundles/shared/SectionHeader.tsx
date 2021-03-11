import {BoxProps, HStack} from '@chakra-ui/react';
import React from 'react';
import {SectionAside} from './SectionAside';
import {SectionTitle} from './SectionTitle';

export interface SectionHeaderProps extends BoxProps {
  title?: string;
  leftAside?: React.ReactNode;
  rightAside?: React.ReactNode;
  children?: React.ReactNode;
}

export const SectionHeader = ({
  title,
  leftAside,
  rightAside,
  children,
  ...props
}: SectionHeaderProps) => {
  return (
    <HStack as="header" borderBottomWidth={1} pb={2} mb={2} {...props}>
      {children || (
        <>
          {leftAside && <SectionAside>{leftAside}</SectionAside>}
          {title && <SectionTitle flex="1">{title}</SectionTitle>}
          {rightAside && <SectionAside>{rightAside}</SectionAside>}
        </>
      )}
    </HStack>
  );
};
