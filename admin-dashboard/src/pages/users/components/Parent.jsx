import { FaEdit } from "react-icons/fa";
import { BASE_URL } from "../../../components/Base_url";
function Parent({ parent, handleDelete }) {
  const { id, name, email, address, user_image } = parent;

  return (
    <li className="user flex-between flex-items">
      <div className="name flex">
        <div className="image">
          {user_image ? (
            <img
              src={`${BASE_URL}/images/${user_image}`}
              alt="name"
              className="s-image"
            />
          ) : (
            <img
              src="./default-user-icon.webp"
              alt="name"
              className="s-image"
            />
          )}
        </div>
        <h2>{name}</h2>
      </div>
      <div className="email">
        <h4>{email}</h4>
      </div>
      <div className="address">
        <h4>{address || "Koura"}</h4>
      </div>

      <div className="delete">
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </li>
  );
}

export default Parent;
