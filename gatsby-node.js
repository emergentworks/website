const path = require('path');

// Absolute imports paths
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/post.js');

  return graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              path
              blurb
            }
            body
            id
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: node.id,
      });
    });
  });
};
