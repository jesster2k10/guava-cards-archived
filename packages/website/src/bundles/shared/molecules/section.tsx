import React, {Children} from 'react';
import {Box, BoxProps} from '@chakra-ui/layout';
import {SectionHeader} from '../atoms/section-header';
import {SectionBody} from '../atoms/section-body';

export interface SectionProps extends BoxProps {
  title?: string;
  leftAside?: React.ReactNode;
  rightAside?: React.ReactNode;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  leftAside,
  rightAside,
  children,
  ...props
}) => {
  const isSingleChild = Children.count(children) <= 1;

  return (
    <Box as="section" w="full" {...props}>
      {!isSingleChild ? (
        children
      ) : (
        <>
          {(title || leftAside || rightAside) && (
            <SectionHeader
              title={title}
              leftAside={leftAside}
              rightAside={rightAside}
            />
          )}
          {children && <SectionBody>{children}</SectionBody>}
        </>
      )}
    </Box>
  );
};
