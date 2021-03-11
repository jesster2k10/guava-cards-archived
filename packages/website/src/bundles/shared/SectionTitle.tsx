import {Box, BoxProps} from '@chakra-ui/react';
import React from 'react';

export interface SectionTitleProps extends BoxProps {
  children: React.ReactNode;
}

export const SectionTitle = ({children, ...props}: SectionTitleProps) => (
  <Box as="h3" fontSize="md" fontWeight="semibold" textAlign="left" {...props}>
    {children}
  </Box>
);
