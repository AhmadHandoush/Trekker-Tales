import { useState } from "react";

function Update({ setUpdate }) {
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/update_teacher_info/5`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

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
        <span onClick={() => setUpdate(false)}>X</span>
      </div>
      <form className="flex column" onSubmit={handleSubmit}>
        <h2>Update</h2>
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

        <button type="submit" className="added">
          Save
        </button>
      </form>
    </div>
  );
}

export default Update;
