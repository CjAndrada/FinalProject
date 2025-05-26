// backend/routes/orders.js

const express = require("express");
const router = express.Router();
const db = require("../db"); // adjust based on your database setup

router.post("/checkout", (req, res) => {
  const { cart, name, address, paymentMethod } = req.body;

  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: "Cart is empty." });
  }

  const orderQuery = "INSERT INTO orders (name, address, payment_method) VALUES (?, ?, ?)";
  db.query(orderQuery, [name, address, paymentMethod], (err, result) => {
    if (err) return res.status(500).json({ message: "Order insert failed", error: err });

    const orderId = result.insertId;

    const itemsQuery = "INSERT INTO order_items (order_id, product_name, price, quantity) VALUES ?";
    const items = cart.map(item => [orderId, item.name, item.price, item.quantity]);

    db.query(itemsQuery, [items], (err2) => {
      if (err2) return res.status(500).json({ message: "Items insert failed", error: err2 });
      return res.status(200).json({ message: "Order placed successfully!" });
    });
  });
});

module.exports = router;
