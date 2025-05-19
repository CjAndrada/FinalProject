import React from "react";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="login-container">
      <div className="left-panel"></div>

      <div className="right-panel">
        <h1 className="title">UniPTC</h1>
        <h2 className="subtitle">Welcome!</h2>
        <p className="desc">Login to your account</p>

        <form className="login-form">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

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
          Not Registered Yet? <a href="/">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
