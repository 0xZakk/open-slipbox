import React from "react";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";

export default function Layout(props) {
  return (
    <>
      <PageHeader />
      {props.children}
      <PageFooter />
    </>
  );
}
