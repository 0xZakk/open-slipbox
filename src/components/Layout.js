import React from "react";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";
import Container from "./container";

export default function Layout(props) {
  return (
    <Container>
      <PageHeader />
      {props.children}
      <PageFooter />
    </Container>
  );
}
