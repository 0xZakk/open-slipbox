/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Box } from "theme-ui";

export default function Container(props) {
  return (
    <Box sx={{ width: "90%", mx: "auto", maxWidth: 980 }}>{props.children}</Box>
  );
}
