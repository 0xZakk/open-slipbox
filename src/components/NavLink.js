/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export default function NavLink(props) {
  return <Link {...props} sx={{ p: 3, display: "inline-block" }}></Link>;
}
