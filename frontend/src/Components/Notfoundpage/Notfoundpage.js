import React from "react";
import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>404 Not Found Page X</h1>
      <Link to={"/Home"}>
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
          {"Go Back Home"}
        </button>
      </Link>
    </div>
  );
};

export default Notfoundpage;
