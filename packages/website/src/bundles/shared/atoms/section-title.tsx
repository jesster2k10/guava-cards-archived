import React from 'react';
import {Box, BoxProps} from '@chakra-ui/layout';

export interface SectionTitleProps extends BoxProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  ...props
}) => (
  <Box
    as="h3"
    fontSize="md"
    fontWeight="semibold"
    color="text"
    textAlign="left"
    {...props}>
    {children}
  </Box>
);
