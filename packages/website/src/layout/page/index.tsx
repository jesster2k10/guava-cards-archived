/**
 * Created by Jesse Onolememen. 27/02/2021
 */

import {Children} from 'react';
import {Box, BoxProps, Heading, HStack} from '@chakra-ui/react';
import {PageMeta} from './meta';
import {PageHeader} from './header';
import {Breadcrumbs} from './breadcrumbs';

interface PageProps extends BoxProps {
  title?: string;
  subtitle?: string;
  titleAside?: React.ReactNode;
  breadcrumbs?: Breadcrumbs;
}

const Page = ({
  children,
  title,
  subtitle,
  breadcrumbs,
  titleAside,
  ...props
}: PageProps) => {
  const asideChild: any = Children.toArray(children).find(
    (child: any) => child.type === TitleAside,
  );
  const aside = asideChild?.props?.children ?? titleAside;

  return (
    <Box d="flex" p={4} flexDir="column" bg="bg">
      <PageMeta title={title} />
      <PageHeader breadcrumbs={breadcrumbs} />
      <Box as="section" d="flex" flexDir="column" pt={4}>
        {title && (
          <Box
            w="full"
            d="flex"
            alignItems="center"
            justifyContent="space-between">
            <Box d="flex" flexDir="column">
              <Heading fontSize="lg">{title}</Heading>
              {subtitle && (
                <Heading<'h2'>
                  as="h2"
                  fontSize="0.8rem"
                  fontWeight="regular"
                  color="secondary2"
                  mt={2}>
                  {subtitle}
                </Heading>
              )}
            </Box>
            {aside && <HStack<'div'>>{aside}</HStack>}
          </Box>
        )}
        <Box d="flex" flexDir="column" mt={3} {...props}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

const TitleAside = (_: {children: React.ReactNode}) => null;
Page.TitleAside = TitleAside;

export {Page};
