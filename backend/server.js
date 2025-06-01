const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

// Middlewares
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order'); // Checkout logic
const productRoutes = require('./routes/products'); // Product + stock routes

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api', orderRoutes);
app.use('/api', productRoutes); // All product-related routes start with /api

// Test database connection
pool.getConnection()
  .then(connection => {
    console.log('Database connected!');
    connection.release(); 
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

// Simple test route
app.get('/test', (req, res) => {
  res.json({ message: "Backend is working fine!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

