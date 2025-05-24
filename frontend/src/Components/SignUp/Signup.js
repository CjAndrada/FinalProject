import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  // const [emailInput, setEmailInput] = useState("");
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
        <h1 className="title">Create Account</h1>
        <p className="desc">Sign up now!</p>

        <form className="signup-form">
          <label> Full Name:</label>
          <input type="Full Name" placeholder="Enter your full name"></input>
          <label>Email Address:</label>
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
            <label style={{ fontSize: "13px" }}>
              <input type="checkbox" />I accept the terns of service and privacy
              policy
            </label>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        <p className="signup-link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
