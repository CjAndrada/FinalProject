import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorLabel, setErrorLabel] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation for your domain
    if (!formData.email.includes("@paterostechnologicalcollege.edu.ph")) {
      setErrorLabel("Please input a valid email");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorLabel("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username: formData.email, // or use fullname, depending on your backend
        password: formData.password,
      });

      
      alert("Registration successful! Please login.");
      navigate("/LogIn");
    } catch (error) {
      setErrorLabel(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel"></div>

      <div className="right-panel">
        <h1 className="title">Create Account</h1>
        <p className="desc">Sign up now!</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label style={{ color: "red" }}>{errorLabel}</label>

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="options">
            <label style={{ fontSize: "13px" }}>
              <input type="checkbox" required />
              I accept the terms of service and privacy policy
            </label>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        <p className="signup-link">
          Already have an account? <a href="/LogIn">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
