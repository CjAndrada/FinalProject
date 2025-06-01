import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Notfoundpage = () => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1>

      {/* Home Button */}
      <Link to="/Home">
        <button
          style={{
            width: "20%",
            color: "black",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "20px",
            fontSize: "15px",
            marginLeft: "610px",
          }}
        >
          Home
        </button>
      </Link>

      {/* Logout Button */}
      <button
        onClick={handleLogoutClick}
        style={{
          width: "20%",
          color: "white",
          backgroundColor: "grey",
          fontWeight: "bold",
          padding: "10px",
          borderRadius: "20px",
          fontSize: "15px",
          marginLeft: "610px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      {/* Confirmation Dialog */}
      {showConfirm && (
        <div
          style={{
            position: "fixed",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            zIndex: 999,
          }}
        >
          <p>Are you sure you want to logout?</p>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={confirmLogout}
              style={{
                marginRight: "10px",
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Yes
            </button>
            <button
              onClick={cancelLogout}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notfoundpage;
