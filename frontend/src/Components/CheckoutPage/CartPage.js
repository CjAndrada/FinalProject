import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import ShoppingCartCheckoutSharpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import Headerbar from "../Headerbar";

const CartPage = () => {
  const { cart, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          total: getTotal(),
        }),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        navigate("/");
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div>
      <Headerbar />
      <h2 style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontSize: "28px",
      }}>
        <ShoppingBagTwoToneIcon style={{ fontSize: "30px" }} />
        My Cart
      </h2>

      <div style={{
        height: "2px",
        backgroundColor: "black",
        maxWidth: "50%",
        margin: "10px auto",
      }} />

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                width: "100%",
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
                  ₱{item.price} × {item.quantity}
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
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{
        height: "2px",
        backgroundColor: "black",
        maxWidth: "50%",
        margin: "10px auto",
      }} />

      <h3 style={{ textAlign: "center" }}>Total: ₱{getTotal()}</h3>

      {cart.length > 0 && (
        <button
          onClick={handleCheckout}
          style={{
            fontSize: "18px",
            borderRadius: "10px",
            backgroundColor: "#00bf63",
            margin: "20px auto",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            border: "none",
            color: "black",
            cursor: "pointer",
          }}
        >
          <ShoppingCartCheckoutSharpIcon />
          Check Out
        </button>
      )}
    </div>
  );
};

export default CartPage;
