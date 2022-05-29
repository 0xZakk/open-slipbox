// TODO: migrate to gatsby-browser and gatsby-server
import React from "react";
import Layout from "../components/Layout";

export default function Template(props) {
  const { pageContext } = props;
  const { html, frontmatter } = pageContext;

  console.log(props);

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
