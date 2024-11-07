// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const blogRoutes = require('./blogRoutes');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the blog routes
app.use('/api', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});