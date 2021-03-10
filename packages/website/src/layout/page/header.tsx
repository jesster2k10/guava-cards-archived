/**
 * Created by Jesse Onolememen. 27/02/2021
 */

import {Box, BoxProps, HStack} from '@chakra-ui/react';
import BisBell from '@meronex/icons/bi/BisBell';
import {Breadcrumbs, PageBreadcrumbs} from './breadcrumbs';

interface PageHeaderProps extends BoxProps {
  breadcrumbs?: Breadcrumbs;
}

const PageHeader = ({breadcrumbs, ...props}: PageHeaderProps) => {
  return (
    <Box
      d="flex"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      color="secondary2"
      {...props}>
      {breadcrumbs && (
        <Box>
          <PageBreadcrumbs breadcrumbs={breadcrumbs} />
        </Box>
      )}
      <HStack<'div'>>
        <BisBell />
      </HStack>
    </Box>
  );
};

export {PageHeader};
