/* Section markup
<section>
  <section-header>
    <section-actions>
      <section-action></section-action>
    </section-actions>
    <section-title></section-title>
    <section-actions>
      <section-action></section-action>
      <section-action></section-action>
    </section-actions>
  </section-header>
  <section-body></section-body>
</section>
*/

import React from 'react';
import {BoxProps, HStack} from '@chakra-ui/layout';
import {SectionAside} from './section-aside';
import {SectionTitle} from './section-title';

export interface SectionHeaderProps extends BoxProps {
  title?: string;
  leftAside?: React.ReactNode;
  rightAside?: React.ReactNode;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  leftAside,
  rightAside,
  children,
  ...props
}) => {
  return (
    <HStack as="header" borderBottomWidth={1} pb={2} mb={2} {...props}>
      {children ? (
        children
      ) : (
        <>
          {leftAside && <SectionAside>{leftAside}</SectionAside>}
          {title && <SectionTitle flex="1">{title}</SectionTitle>}
          {rightAside && <SectionAside>{rightAside}</SectionAside>}
        </>
      )}
    </HStack>
  );
};
