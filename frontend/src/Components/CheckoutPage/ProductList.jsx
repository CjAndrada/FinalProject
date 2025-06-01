import React from "react";
import products from "./products"; // path depende kung nasaan 'products.js'
import { useCart } from "./CartContext";
import Headerbar from "../Headerbar";

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <Headerbar />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "28px",
        }}
      >
        Available Products
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "180px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h4>{product.name}</h4>
            <p>₱ {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "#00bf63",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
