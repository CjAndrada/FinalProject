import React, { useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [emailInput, setEmailInput] = useState("");
  const [errorLabel, setErrorLabel] = useState("");

  const handleEmailInput = (e) => {
    console.log("onhange val", e.target.value);

    const userEmail = e.target.value;
    if (userEmail) {
      if (!userEmail.includes("@paterostechnologicalcollege.edu.ph")) {
        setErrorLabel("Please input a valid email");
      } else {
        setErrorLabel("");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel"></div>

      <div className="right-panel">
        <h1 className="title">UniPTC</h1>
        <h2 className="subtitle">Welcome!</h2>
        <p className="desc">Login to your account</p>

        <form className="login-form">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              handleEmailInput(e);
            }}
          />
          <label style={{ color: "red" }}>{errorLabel}</label>

          <label>Password:</label>
          <div className="password-field">
            <input type="password" placeholder="Enter your password" />
          </div>

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
