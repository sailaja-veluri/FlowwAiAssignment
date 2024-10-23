// app.js

const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactions');
const categoryRoutes = require('./routes/categories');
const db = require('./models/db');  // Import the database connection

// Initialize the app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define your routes
app.use('/api', transactionRoutes);
app.use('/api', categoryRoutes);

// Error handling middleware (for any unhandled routes or errors)
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'An unexpected error occurred'
    });
});

// Start the server
const PORT = process.env.PORT || 3023;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
