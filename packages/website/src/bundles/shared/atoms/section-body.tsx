import React from 'react';
import {Box, BoxProps} from '@chakra-ui/layout';

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
