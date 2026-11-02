
require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');

const app = express();

// Import routes
const komikRoutes = require('./routes/komikRoutes');

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Komik API is running!'
    });
});

// Komik API routes
app.use('/api/komik', komikRoutes);

// Start server
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully!');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error.message);
    });
