import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";
import { Link } from "react-router-dom"; 

const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorLabel, setErrorLabel] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", formData.username);

      navigate("/"); // redirect to homepage
    } catch (error) {
      setErrorLabel(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel"></div>

      <div className="right-panel">
        <h1 className="title">UniPTC</h1>
        <h2 className="subtitle">Welcome!</h2>
        <p className="desc">Login to your account</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Password:</label>
          <div className="password-field">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {errorLabel && (
            <div style={{ color: "red", marginBottom: "10px" }}>{errorLabel}</div>
          )}

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="divider" />

         <p className="signup-link">
          Not Registered Yet? <Link to="/Signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
