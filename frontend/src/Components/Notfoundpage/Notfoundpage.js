import React from "react";
import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Not Found Page X</h1>
      <Link to={"/Home"}>
        <button style={{ textAlign: "center" }}> Go Back Home</button>
      </Link>
    </div>
  );
};

export default Notfoundpage;
