import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import PrismSyntaxHighlight from '../../components/prism-syntax-highlight';

const components = {
  code: ({ children, className }) => {
    return <PrismSyntaxHighlight className={className}>{children}</PrismSyntaxHighlight>;
  }
};

const Page = ({
  data: {
    mdx: {
      frontmatter: { title, date },
      body
    }
  }
}) => (
  <Fragment>
    <Link to="/">Back</Link>
    <h1>{title}</h1>
    <small>{date}</small>
    <MDXProvider components={components}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  </Fragment>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      body
    }
  }
`;
export default Page;
