import { FaEdit } from "react-icons/fa";
function Parent({ parent, handleDelete }) {
  const { id, name, email, address, user_image } = parent;

  return (
    <li className="user flex-between flex-items">
      <div className="name flex">
        <div className="image">
          <img
            src={`http://127.0.0.1:8000/images/${user_image}`}
            alt="name"
            className="s-image"
          />
        </div>
        <h2>{name}</h2>
      </div>
      <div className="email">
        <h4>{email}</h4>
      </div>
      <div className="address">
        <h4>Barsa Kura</h4>
      </div>

      <div className="delete">
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </li>
  );
}

export default Parent;
