import { useLocation } from "react-router-dom";
import "./header.css";
import "../../styles/utilities.css";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [search, setSearch] = useState("");

  const hideHeader = pathname === "/";

  if (hideHeader) {
    return null;
  }

  return (
    <header className="flex-between flex-items">
      <div className="search flex-items ">
        <input type="text" placeholder="Search..." />
        <IoSearch />
      </div>
      <div className="admin_image">
        <img src="./Friend.jpeg" alt="admin_image" className="s-image" />
      </div>
    </header>
  );
}

export default Header;
