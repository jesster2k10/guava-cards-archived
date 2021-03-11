import {BoxProps, HStack} from '@chakra-ui/react';
import React from 'react';

export interface SectionAsideProps extends BoxProps {
  children: React.ReactNode;
}

export const SectionAside = ({children, ...props}: SectionAsideProps) => (
  <HStack as="aside" {...props}>
    {children}
  </HStack>
);
