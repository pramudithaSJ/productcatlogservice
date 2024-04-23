const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product-routes');
const dotenv = require('dotenv'); 
dotenv.config(); // Load environment variables from .env file
const app = express();

// Middleware setup
app.use(express.json());
app.use('/api', productRoutes); // Use product routes under '/api' prefix

// MongoDB Atlas connection URI
const MONGODB_URI = process.env.MONGODB_URI; // Access MONGODB_URI from environment variables

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Start Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
