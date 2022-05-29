import React from "react";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";
import Container from "./container";

function Layout(props) {
  return (
    <Container>
      <PageHeader />
      {props.children}
      <PageFooter />
    </Container>
  );
}

export default Layout;
