import { useEffect, useState } from "react";
import Teacher from "./components/Teacher";
import "./teachers.css";
import AddTeacher from "./components/AddTeacher";
import Update from "./components/Update";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const getTrips = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "http://192.168.1.16:8000/api/get_teachers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
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
        setTeachers(teachers.filter((item) => item.id !== id));
      } else {
        console.log("failed to delete item");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="teachers">
      {add && <div className="overlay"></div>}
      {update && <div className="overlay"></div>}
      <div className="table">
        <div className="titles flex-between  flex-items">
          <h2>Username</h2>
          <h2>Email</h2>
          <h2 className="address">Address</h2>
          <button className="add-teacher" onClick={() => setAdd(true)}>
            Add +
          </button>
          {add && <AddTeacher setAdd={setAdd} />}
          {update && <Update setUpdate={setUpdate} />}
        </div>
        <div className="second">
          <ul className="teachers-list flex column">
            {teachers.map((teacher, index) => (
              <Teacher
                teacher={teacher}
                key={index}
                handleDelete={handleDelete}
                setUpdate={setUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
