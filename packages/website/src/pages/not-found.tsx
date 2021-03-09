import {Box} from '@chakra-ui/react';
import {NotFoundError} from '@guava/core';

interface NotFoundPageProps {
  error?: NotFoundError;
}

const NotFoundPage = ({error}: NotFoundPageProps) => {
  return <Box>404 Bitch</Box>;
};

export {NotFoundPage};
