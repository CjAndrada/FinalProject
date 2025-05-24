import React from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AddToCartButton = ({ label, onClick }) => {
  return (
    <Button
      style={{
        backgroundColor: "#00bf63",
        fontSize: "12px",
        color: "black",
        borderRadius: "20px",
        marginTop: "15px",
      }}
      variant="contained"
      onClick={onClick}
    >
      <ShoppingCartIcon />
      <b>{label}</b>
    </Button>
  );
};

export default AddToCartButton;
