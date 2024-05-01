import "./teachers.css";
import { FaEdit } from "react-icons/fa";
function Teachers() {
  return (
    <div className="teachers">
      <div className="titles flex-between  flex-items">
        <h3>Username</h3>
        <h3>Email</h3>
        <h3>Address</h3>
        <button className="add-teacher">Add +</button>
      </div>
      <div className="second">
        <ul className="teachers-list flex column">
          <li className="user flex-between">
            <div className="name flex">
              <div className="image">
                <img src="./Friend.jpeg" alt="name" className="s-image" />
              </div>
              <h2>Jhon Doe</h2>
            </div>
            <div className="email">
              <h4>example@gmail.com</h4>
            </div>
            <div className="address">
              <h4>Barsa Kura</h4>
            </div>
            <div className="edit">
              <FaEdit />
            </div>
            <div className="delete">
              <button>Delete</button>
            </div>
          </li>
          <li className="user flex-between">
            <div className="name">
              <div className="image">
                <img src="./Friend.jpeg" alt="name" className="s-image" />
                <h2>Jhon Doe</h2>
              </div>
            </div>
            <div className="email">
              <h4>example@gmail.com</h4>
            </div>
            <div className="address">
              <h4>Barsa Kura</h4>
            </div>
            <div className="update"></div>
            <div className="delete">
              <button>Delete</button>
            </div>
          </li>
          <li className="user flex-between">
            <div className="name">
              <div className="image">
                <img src="./Friend.jpeg" alt="name" className="s-image" />
                <h2>Jhon Doe</h2>
              </div>
            </div>
            <div className="email">
              <h4>example@gmail.com</h4>
            </div>
            <div className="address">
              <h4>Barsa Kura</h4>
            </div>
            <div className="update"></div>
            <div className="delete">
              <button>Delete</button>
            </div>
          </li>
          <li className="user flex-between">
            <div className="name">
              <div className="image">
                <img src="./Friend.jpeg" alt="name" className="s-image" />
                <h2>Jhon Doe</h2>
              </div>
            </div>
            <div className="email">
              <h4>example@gmail.com</h4>
            </div>
            <div className="address">
              <h4>Barsa Kura</h4>
            </div>
            <div className="update"></div>
            <div className="delete">
              <button>Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Teachers;
