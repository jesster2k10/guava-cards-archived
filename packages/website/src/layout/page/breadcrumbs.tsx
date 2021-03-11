/**
 * Created by Jesse Onolememen. 27/02/2021
 */

import {Box, BoxProps} from '@chakra-ui/react';
import {Link} from '~/shared/Link';

export type Breadcrumbs = {title: string; path?: string}[];

interface PageBreadcrumbsProps extends BoxProps {
  breadcrumbs: Breadcrumbs;
}

const PageBreadcrumbs = ({breadcrumbs, ...props}: PageBreadcrumbsProps) => {
  return (
    <Box as="ul" layerStyle="lists.slash" {...props}>
      {breadcrumbs.map(crumb => (
        <Box as="li" key={crumb.title}>
          {crumb.path ? (
            <Link to={crumb.path}>{crumb.title}</Link>
          ) : (
            crumb.title
          )}
        </Box>
      ))}
    </Box>
  );
};

export {PageBreadcrumbs};
