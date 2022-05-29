import React from "react";
import { Box } from "theme-ui";
import { Link } from "gatsby";

export default function PageFooter() {
  return (
    <Box sx={{ mb: 5 }}>
      <hr />
      <div>
        <div>
          &copy; <Link to="/">zkf.io</Link> |{" "}
          <Link to="/articles">Writing</Link> |{" "}
          <Link to="/domains">Areas of Interest</Link> |{" "}
          <Link to="/about">About</Link> | <Link to="/privacy">Privacy</Link> |{" "}
          <Link to="/changelog">What's new</Link>
        </div>
      </div>
    </Box>
  );
}
