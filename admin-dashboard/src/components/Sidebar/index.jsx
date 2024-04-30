import { NavLink, useLocation } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaBusAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import "./sidebar.css";
import "../../styles/utilities.css";

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;

  const hideSidebar = pathname === "/";

  if (hideSidebar) {
    return null;
  }
  return (
    <aside>
      <div className="top">
        <div className="logo">
          {" "}
          <img src="./Borcelle (3).png" alt="" />
        </div>
      </div>
      <div className="menu">
        <ul className="flex column ">
          <li>
            <NavLink to={"/"}>
              <IoIosHome />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/trips"}>
              <FaBusAlt />
              Trips
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaUsers />
              Teachers
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaUsers />
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
