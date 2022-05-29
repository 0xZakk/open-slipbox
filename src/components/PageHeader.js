/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex, Box } from "theme-ui";
import NavLink from "./NavLink";

export default function PageHeader() {
  return (
    <Flex>
      <Box>
        <NavLink to="/" sx={{ ml: -16 }}>
          Home
        </NavLink>
      </Box>
      <Box ml="auto">
        <NavLink to="/articles">Writing</NavLink>
        <NavLink to="/domains" sx={{ mr: -16 }}>
          Areas of Interest
        </NavLink>
      </Box>
    </Flex>
  );
}
