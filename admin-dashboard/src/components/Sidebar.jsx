import { NavLink } from "react-router-dom";
import "../styles/utilities.css";
import { IoIosHome } from "react-icons/io";
import { FaBusAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

function Sidebar() {
  return (
    <aside>
      <div className="logo"></div>
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
