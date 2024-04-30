import { useLocation } from "react-router-dom";
import "./header.css";
import "../../styles/utilities.css";

function Header() {
  const location = useLocation();
  const { pathname } = location;

  const hideHeader = pathname === "/";

  if (hideHeader) {
    return null;
  }

  return (
    <header className="flex">
      <div className="search">
        <input type="text" />
      </div>
      <div className="admin_image">
        <img src="./Friend.jpeg" alt="admin_image" className="s-image" />
      </div>
    </header>
  );
}

export default Header;
