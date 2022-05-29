// TODO: migrate to gatsby-browser and gatsby-server
import React from "react";
import Layout from "../components/Layout";

export default function Template({ pageContext }) {
  const { html } = pageContext;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
