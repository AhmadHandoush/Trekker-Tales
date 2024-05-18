import { FaEdit } from "react-icons/fa";
function Teacher({ teacher, handleDelete, setUpdate }) {
  const { id, name, email, address } = teacher;

  return (
    <li className="user flex-between flex-items">
      <div className="name flex">
        <div className="image">
          <img src="./Friend.jpeg" alt="name" className="s-image" />
        </div>
        <h2>{name}</h2>
      </div>
      <div className="email">
        <h4>{email}</h4>
      </div>
      <div className="address">
        <h4>{address}</h4>
      </div>

      <FaEdit onClick={() => setUpdate(true)} className="editing" />

      <div className="delete">
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </li>
  );
}

export default Teacher;
