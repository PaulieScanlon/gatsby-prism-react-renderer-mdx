import { Link } from 'gatsby';
import React from 'react';

const Page = () => {
  return (
    <main>
      <h1>Index</h1>
      <ul>
        <li>
          <Link to="/posts/post-one/">Post One</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
