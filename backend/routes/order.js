const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create new uniform order
router.post('/', async (req, res) => {
  const { student_id, uniform_type, size, quantity } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO uniform_orders (student_id, uniform_type, size, quantity) VALUES (?, ?, ?, ?)',
      [student_id, uniform_type, size, quantity]
    );

    res.json({ message: 'Order placed successfully', orderId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all orders (optional)
router.get('/', async (req, res) => {
  try {
    const [orders] = await pool.query('SELECT * FROM uniform_orders');
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
