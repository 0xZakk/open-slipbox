/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Flex, Box } from "theme-ui";

function ArticlesPage({ data }) {
  const articles = data.allFile.edges
    .map((edge) => edge.node.childrenMarkdownRemark[0].frontmatter)
    .reduce((prev, curr, i) => {
      const published = new Date(curr.date_published);

      const year = published.getFullYear();
      const month = published.getMonth();
      const day = published.getDate();

      if (!prev[year]) prev[year] = {};
      if (!prev[year][month]) prev[year][month] = {};
      if (!prev[year][month][day]) prev[year][month][day] = [];

      prev[year][month][day].push(curr);

      return prev;
    }, {});
  const years = Object.keys(articles).sort((a, b) => b - a);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(articles);
  console.log(years);
  return (
    <Layout>
      <h1>Articles</h1>
      <Box>
        {years.map((year) => {
          return (
            <Box key={year}>
              <h2>{year}</h2>
              {Object.keys(articles[year])
                .sort((a, b) => b - a)
                .map((month) => {
                  return (
                    <Box sx={{ mb: 4 }}>
                      <h3 sx={{ mt: 0, mb: 3 }}>{months[month]}</h3>
                      {Object.keys(articles[year][month])
                        .sort((a, b) => b - a)
                        .map((day) => {
                          return (
                            <Flex sx={{ mb: 3 }}>
                              <Box
                                sx={{
                                  display: ["none", "block"],
                                  pr: 4,
                                }}
                              >
                                <h4 sx={{ mt: 0 }}>{day}</h4>
                              </Box>
                              <Box>
                                <Box>
                                  {articles[year][month][day].map((article) => (
                                    <>
                                      <Link to={`/${article.slug}`}>
                                        <h4 sx={{ mt: 0, mb: 1 }}>
                                          {article.title}
                                        </h4>
                                      </Link>
                                      <p sx={{ m: 0 }}>{article.excerpt}</p>
                                    </>
                                  ))}
                                </Box>
                              </Box>
                            </Flex>
                          );
                        })}
                    </Box>
                  );
                })}
            </Box>
          );
        })}
      </Box>
    </Layout>
  );
}

export const query = graphql`
  query ArticlesQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "articles" } }
      sort: {
        fields: childrenMarkdownRemark___frontmatter___date_published
        order: DESC
      }
    ) {
      edges {
        node {
          childrenMarkdownRemark {
            frontmatter {
              title
              slug
              date_published
              excerpt
            }
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
