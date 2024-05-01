import { useState } from "react";

function AddTeacher({ setAdd }) {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        console.log("succes");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    }
  };

  return (
    <div className="add-box center">
      <div className="close">
        <span onClick={() => setAdd(false)}>X</span>
      </div>
      <form className="flex column">
        <h2>Add Teacher</h2>
        <div className="input flex column">
          <label htmlFor="">Name:</label>
          <input type="text" placeholder="Enter the teacher's name" />
        </div>
        <div className="input flex column">
          <label htmlFor="">Email:</label>
          <input type="email" placeholder="Enter the teacher's email" />
        </div>
        <div className="input flex column">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter the teacher's password" />
        </div>
        <button type="submit" className="added">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTeacher;
