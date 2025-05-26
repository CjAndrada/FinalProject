const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/checkout", async (req, res) => {
  const { items, total } = req.body;

  try {
    // Insert the main order
    const [orderResult] = await db.query(
      "INSERT INTO orders (total) VALUES (?)",
      [total]
    );

    const orderId = orderResult.insertId;

    // Insert each item into order_items
    for (const item of items) {
      await db.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.id, item.quantity, item.price]
      );
    }

    res.status(200).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({ message: "Failed to place order" });
  }
});

module.exports = router;
