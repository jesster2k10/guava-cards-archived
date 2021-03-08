import React from 'react';
import {HStack, BoxProps} from '@chakra-ui/layout';

export interface SectionAsideProps extends BoxProps {
  children: React.ReactNode;
}

export const SectionAside: React.FC<SectionAsideProps> = ({
  children,
  ...props
}) => (
  <HStack as="aside" {...props}>
    {children}
  </HStack>
);
