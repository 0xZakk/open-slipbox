/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Flex, Box } from "theme-ui";
import { Link } from "gatsby";

export default function PageHeader() {
  return (
    <Flex>
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Box ml="auto">
        <Link to="/articles">Writing</Link>
        <Link to="/domains">Areas of Interest</Link>
      </Box>
    </Flex>
  );
}
