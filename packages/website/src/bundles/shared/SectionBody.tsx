import {Box, BoxProps} from '@chakra-ui/react';
import React from 'react';

export interface SectionBodyProps extends BoxProps {
  children: React.ReactNode;
}

export const SectionBody: React.FC<SectionBodyProps> = ({
  children,
  ...props
}) => (
  <Box as="main" {...props}>
    {children}
  </Box>
);
