const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product-routes');
const dotenv = require('dotenv'); 
dotenv.config(); 
const app = express();

// MongoDB Atlas connection URI
const MONGODB_URI = "mongodb+srv://kushanmigara:wWVe0ShwhtfIt2Ru@cluster0.xa9p9st.mongodb.net/" 

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Start Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Middleware setup
app.use(express.json());
app.use('/apiV1', productRoutes); 