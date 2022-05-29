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
  const noteTemplate = require.resolve("./src/templates/note.js");
  const articleTemplate = require.resolve("./src/templates/article.js");

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
    const { id, html, frontmatter } = childMarkdownRemark;

    const page = {
      path: frontmatter.permalink,
      component: defaultTemplate,
      context: { id, html, frontmatter },
    };

    createPage(page);
  });

  /*
   * 2. Create all article pages
   */
  const siteArticles = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
        edges {
          node {
            childMarkdownRemark {
              id
              html
              frontmatter {
                title
                slug
                tags
                date_published
                type
                excerpt
              }
            }
          }
        }
      }
    }
  `);

  if (siteArticles.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const siteArticlesMarkdown = siteArticles.data.allFile.edges;

  siteArticlesMarkdown.forEach(({ node }) => {
    const { childMarkdownRemark } = node;
    const { id, html, frontmatter } = childMarkdownRemark;

    const page = {
      path: frontmatter.slug,
      component: articleTemplate,
      context: { id, html, frontmatter },
    };

    console.log(page);
    createPage(page);
  });
};
