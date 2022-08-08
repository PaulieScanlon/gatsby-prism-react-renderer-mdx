const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions: { createNodeField, createNode }, getNode }) => {
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    });
  }
};
