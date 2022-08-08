module.exports = {
  trailingSlash: 'always',
  siteMetadata: {
    name: 'gatsby-prism-react-renderer-mdx'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content`
      }
    }
  ]
};
