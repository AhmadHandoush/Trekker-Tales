import { useEffect, useState } from "react";
import Teacher from "./components/Teacher";
import "./teachers.css";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getTrips = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/get_teachers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTeachers(data.teachers);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getTrips();
  }, []);
  return (
    <div className="teachers">
      <div className="table">
        <div className="titles flex-between  flex-items">
          <h3>Username</h3>
          <h3>Email</h3>
          <h3 className="address">Address</h3>
          <button className="add-teacher">Add +</button>
        </div>
        <div className="second">
          <ul className="teachers-list flex column">
            {teachers.map((teacher, index) => (
              <Teacher teacher={teacher} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
