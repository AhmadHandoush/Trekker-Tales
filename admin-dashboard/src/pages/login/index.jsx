import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://192.168.0.106:8000/api/login", {
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
      if (responseData.user.role === "admin") {
        localStorage.setItem("token", responseData.authorisation.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    }
  };

  return (
    <div className="login flex-center">
      <div className="right-image">
        <img src="./pexels-laup-10541175.jpg" alt="hero" />
      </div>
      <div className="rights  column">
        <h2 className="title">
          {" "}
          Welcome to <span>Trekker Tales</span>{" "}
        </h2>
        <div className="login-card flex column">
          <div className="top-title flex-center">
            <h2>Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Email</label>

            <div className="input">
              <span className="flex-center">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <label>Password</label>
            <div className="input">
              <span className="flex-center">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="submit flex column">
              <button type="submite">Login</button>
            </div>
            {error && <small className="error">Credentials Errors!</small>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
