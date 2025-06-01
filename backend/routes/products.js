const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/products/:id/reduce-stock", async (req, res) => {
  const productId = req.params.id;
  const { quantity } = req.body;

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ error: "Invalid quantity" });
  }

  try {
    // Get current stock
    const [rows] = await pool.query(
      "SELECT stock FROM products WHERE id = ?",
      [productId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    const currentStock = rows[0].stock;

    if (currentStock < quantity) {
      return res.status(400).json({ error: "Not enough stock available" });
    }

    // Subtract the quantity from stock
    await pool.query(
      "UPDATE products SET stock = stock - ? WHERE id = ?",
      [quantity, productId]
    );

    res.json({
      message: "Stock updated successfully",
      newStock: currentStock - quantity,
    });
  } catch (err) {
    console.error("Error updating stock:", err);
    res.status(500).json({ error: "Failed to update stock" });
  }
});

// ✅ Get all products with stock (optional, if needed by frontend)
router.get("/products", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
