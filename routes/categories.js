// routes/categories.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Define routes for categories
router.post('/categories', categoryController.addCategory);
router.get('/categories', categoryController.getAllCategories);

module.exports = router;
