/**
 * Created by Jesse Onolememen. 27/02/2021
 */
import {Helmet} from 'react-helmet';

interface PageMetaProps {
  title?: string;
  description?: string;
}

const PageMeta = ({title, description}: PageMetaProps) => {
  return (
    <Helmet titleTemplate="%s | Guava" defaultTitle="Guava">
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export {PageMeta};
