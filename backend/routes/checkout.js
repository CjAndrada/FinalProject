const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/checkout", async (req, res) => {
  const { items, total } = req.body;

  const connection = await db.getConnection(); // Use a connection for transaction
  try {
    await connection.beginTransaction();

    // 1. Create main order entry
    const [orderResult] = await connection.query(
      "INSERT INTO orders (total) VALUES (?)",
      [total]
    );
    const orderId = orderResult.insertId;

    // 2. Insert order items and update stock
    for (const item of items) {
      // Save order item
      await connection.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.id, item.quantity, item.price]
      );

      // Update stock
      const [stockResult] = await connection.query(
        "UPDATE products SET stock = stock - ? WHERE id = ? AND stock >= ?",
        [item.quantity, item.id, item.quantity]
      );

      // Optional: check if update affected any rows (insufficient stock)
      if (stockResult.affectedRows === 0) {
        throw new Error(`Insufficient stock for product ID: ${item.id}`);
      }
    }

    // 3. Commit transaction
    await connection.commit();
    res.status(200).json({ message: "Order placed and stock updated successfully" });

  } catch (error) {
    await connection.rollback();
    console.error("Error processing checkout:", error);
    res.status(500).json({ message: "Checkout failed", error: error.message });
  } finally {
    connection.release();
  }
});

module.exports = router;
