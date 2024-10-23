// controllers/categoryController.js

const db = require('../models/db');

// Add a new category
exports.addCategory = (req, res) => {
    const { name, type } = req.body;
    db.run(
        'INSERT INTO categories (name, type) VALUES (?, ?)',
        [name, type],
        function (err) {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            res.status(201).json({ id: this.lastID });
        }
    );
};

// Get all categories
exports.getAllCategories = (req, res) => {
    db.all('SELECT * FROM categories', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(rows);
    });
};
