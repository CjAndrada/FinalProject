// routes/checkout.js
const express = require("express");
const router = express.Router();
const db = require("../db"); // adjust to your db connection

router.post("/checkout", async (req, res) => {
  const { items, total } = req.body;

  try {
    for (const item of items) {
      await db.query(
        "INSERT INTO orders (product_id, quantity, price, total) VALUES (?, ?, ?, ?)",
        [item.id, item.quantity, item.price, total]
      );
    }

    res.status(200).json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Failed to save order" });
  }
});

module.exports = router;
  