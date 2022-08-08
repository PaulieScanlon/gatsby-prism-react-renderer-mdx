import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const Page = () => {
  return (
    <Fragment>
      <h1>Index</h1>
      <ul>
        <li>
          <Link to="/posts/post-one/">Post One</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Page;
