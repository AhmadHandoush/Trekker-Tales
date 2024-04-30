import { useLocation } from "react-router-dom";
import "../../styles/header.css";

function Header() {
  const location = useLocation();
  const { pathname } = location;

  const hideHeader = pathname === "/";

  if (hideHeader) {
    return null;
  }

  return <div>header</div>;
}

export default Header;
