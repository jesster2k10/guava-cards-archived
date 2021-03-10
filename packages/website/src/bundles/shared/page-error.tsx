import React from 'react';
import {NotFoundPage} from '@/pages/not-found';
import {Box, Button} from '@chakra-ui/react';
import {NotFoundError} from '@guava/core';

interface PageErrorProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const PageErrorFallback = ({error, resetErrorBoundary}: PageErrorProps) => {
  const isNotFoundError = error instanceof NotFoundError;
  if (isNotFoundError) {
    return <NotFoundPage error={error as NotFoundError} />;
  }

  return (
    <>
      <Box>Error</Box>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </>
  );
};

export {PageErrorFallback};
