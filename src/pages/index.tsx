import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const main = () => {
  // tslint:disable-next-line:react-hooks-nesting
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  let siteTitle = '';
  if (data && data.site && data.site.siteMetadata) {
    siteTitle = data.site.siteMetadata.title;
  }

  return <div>Hello {siteTitle}!</div>;
};

export default main;
