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
  const defaultTemplate = require.resolve("./src/templates/default.js");
  const noteTemplate = require.resolve("./src/templates/noteTemplate.js");

  const { createPage } = actions;

  /*
   * 1. Create all site pages
   */
  const sitePages = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
        edges {
          node {
            childMarkdownRemark {
              id
              html
              frontmatter {
                title
                permalink
                layout
              }
            }
          }
        }
      }
    }
  `);

  if (sitePages.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const sitePagesMarkdown = sitePages.data.allFile.edges;

  sitePagesMarkdown.forEach(({ node }) => {
    const { childMarkdownRemark } = node;
    const { id, html } = childMarkdownRemark;

    const page = {
      path: childMarkdownRemark.frontmatter.permalink,
      component: defaultTemplate,
      context: { id, html },
    };

    console.log(page);
    createPage(page);
  });
};
