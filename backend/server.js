const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order'); // Handles checkout

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api', orderRoutes); // All checkout endpoints start with /api

// Test route
app.get('/test', (req, res) => {
  res.json({ message: "Backend is working fine!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
