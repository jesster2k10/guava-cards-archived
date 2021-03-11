import {Box, BoxProps} from '@chakra-ui/react';
import React from 'react';

interface IconTextProps extends BoxProps {
  Icon: React.ComponentType;
  text: string;
}

const IconText = ({Icon, text, ...boxProps}: IconTextProps) => (
  <Box d="flex" flexDir="row" alignItems="center" {...boxProps}>
    <Box mr={1}>
      <Icon />
    </Box>
    <Box>{text}</Box>
  </Box>
);

export {IconText};
