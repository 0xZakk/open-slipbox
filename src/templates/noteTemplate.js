import React from "react";
import Layout from "../components/layout";

export default function Template({ pageContext }) {
  const { html } = pageContext;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
