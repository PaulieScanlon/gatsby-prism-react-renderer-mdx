import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';

import PrismSyntaxHighlight from '../../components/prism-syntax-highlight';

const components = {
  code: ({ children, className }) => {
    return className ? (
      <PrismSyntaxHighlight className={className}>{children}</PrismSyntaxHighlight>
    ) : (
      <code>{children}</code>
    );
  }
};

const Page = ({
  data: {
    mdx: {
      frontmatter: { title, date }
    }
  },
  children
}) => (
  <Fragment>
    <Link to="/">Back</Link>
    <h1>{title}</h1>
    <small>{date}</small>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Fragment>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
export default Page;
