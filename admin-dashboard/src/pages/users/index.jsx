import { useEffect, useState } from "react";
import "./users.css";
import Parent from "./components/Parent";
import { BASE_URL } from "../../components/Base_url";

function Users() {
  const [parents, setParents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getTrips = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/get_parents`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setParents(data.parents);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getTrips();
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/delete_user/${id}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        setParents(parents.filter((item) => item.id !== id));
      } else {
        console.log("failed to delete item");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="teachers">
      <div className="table">
        <div className="titles flex-between  flex-items">
          <h2>Username</h2>
          <h2>Email</h2>
          <h2 className="address">Address</h2>
        </div>
        <div className="second">
          <ul className="teachers-list flex column">
            {parents.map((parent, index) => (
              <Parent parent={parent} key={index} handleDelete={handleDelete} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Users;
