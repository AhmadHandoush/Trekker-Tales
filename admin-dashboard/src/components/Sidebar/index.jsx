import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaBusAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import "./sidebar.css";
import "../../styles/utilities.css";
import { HiOutlineLogout } from "react-icons/hi";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const hideSidebar = pathname === "/";

  if (hideSidebar) {
    return null;
  }

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <aside className="flex column">
      <div className="top flex-items">
        <div className="logo">
          {" "}
          <img src="./Borcelle (3).png" alt="" />
        </div>
        <h3 className="bold">Trekker Tales</h3>
      </div>
      <div className="menu flex column">
        <ul className="flex column ">
          <li>
            <NavLink to={"/dashboard"}>
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
            <NavLink to={"/teachers"}>
              <FaUsers />
              Teachers
            </NavLink>
          </li>
          <li>
            <NavLink to={"/users"}>
              <FaUsers />
              Users
            </NavLink>
          </li>
        </ul>
        <div className="logout">
          <Link to={"/"} className="flex-items white" onClick={handleLogout}>
            <HiOutlineLogout />
            Logout
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
