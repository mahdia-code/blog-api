// blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('./blogController');

// Create Route
router.post("/create-blog", blogController.createBlog);

// Read Route
router.get("/read-blog", blogController.readBlog);

// Update Route
router.put("/update-blog", blogController.updateBlog);

// Delete Route
router.delete("/delete-blog", blogController.deleteBlog);

module.exports = router;