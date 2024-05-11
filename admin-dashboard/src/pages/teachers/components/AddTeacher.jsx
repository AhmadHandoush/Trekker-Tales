import { useState } from "react";
import Base_url from "../../../components/Base_url";

function AddTeacher({ setAdd }) {
  const Base_URL = Base_url();
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${Base_URL}/api/add_teacher`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        console.log("success");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="add-box center">
      <div className="close">
        <span onClick={() => setAdd(false)}>X</span>
      </div>
      <form className="flex column" onS>
        <h2>Add Teacher</h2>
        <div className="input flex column">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter the teacher's name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input flex column">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter the teacher's email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="input flex column">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter the teacher's password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="added">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTeacher;
