import React from "react";
import { Grid } from "@mui/material";
import { useCart } from "./CartContext";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import ShoppingCartCheckoutSharpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import Headerbar from "../Headerbar";

const CartPage = () => {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div>
      <Headerbar />
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontSize: "28px",
        }}
      >
        <ShoppingBagTwoToneIcon style={{ fontSize: "30px" }} />
        My Cart
      </h2>

      <div
        className="divider"
        style={{
          height: "2px",
          backgroundColor: "black",
          maxWidth: "50%",
          justifySelf: "center",
        }}
      />

      {cart.length === 0 ? (
        <p style={{ justifySelf: "center" }}>Cart is empty</p>
      ) : (
        <div style={{ justifySelf: "center" }}>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                maxWidth: "500px",
                marginLeft: "30px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginLeft: "10px",
                }}
              />
              <div>
                <strong style={{ marginLeft: "30px" }}>{item.name}</strong>
                <p style={{ marginLeft: "30px" }}>
                  Php {item.price} × {item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "#00bf63",
                    fontSize: "15px",
                    color: "black",
                    borderRadius: "20px",
                    padding: "5px 10px",
                    marginLeft: "30px",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div
        className="divider"
        style={{
          height: "2px",
          backgroundColor: "black",
          maxWidth: "50%",
          justifySelf: "center",
        }}
      />
      <h3 style={{ justifySelf: "center" }}>Total: ₱ {getTotal()}</h3>
      <button
        style={{
          fontSize: "18px",
          borderRadius: "10px",
          backgroundColor: "#00bf63",
          marginLeft: "45%",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          border: "none",
          color: "Black",
          cursor: "pointer",
        }}
      >
        <ShoppingCartCheckoutSharpIcon />
        Check Out
      </button>
    </div>
  );
};

export default CartPage;
