const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    console.log("Slug:", slug);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            parent {
              ... on File {
                name
              }
            }
            frontmatter {
              title
              permalink
              layout
              id
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const markdowns = result.data.allMarkdownRemark.edges;

  const noteTemplate = require.resolve("./src/templates/noteTemplate.js");

  markdowns.forEach(({ node }) => {
    const { id, html } = node;

    const page = {
      path: node.frontmatter.permalink,
      component: noteTemplate,
      context: { id, html },
    };

    //console.log(page);
    createPage(page);
  });
};
