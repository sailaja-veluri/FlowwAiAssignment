// controllers/transactionController.js

const db = require('../models/db');

// Add a new transaction
exports.addTransaction = (req, res) => {
    const { type, category, amount, date, description } = req.body;
    db.run(
        'INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)',
        [type, category, amount, date, description],
        function (err) {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            res.status(201).json({ id: this.lastID });
        }
    );
};

// Get all transactions
exports.getAllTransactions = (req, res) => {
    db.all('SELECT * FROM transactions', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(rows);
    });
};

// Get a transaction by ID
exports.getTransactionById = (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM transactions WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.json(row);
    });
};

// Update a transaction by ID
exports.updateTransaction = (req, res) => {
    const { id } = req.params;
    const { type, category, amount, date, description } = req.body;
    
    // First, check if the transaction exists
    db.get('SELECT * FROM transactions WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        // Update the transaction
        db.run(
            `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`,
            [type, category, amount, date, description, id],
            function (err) {
                if (err) {
                    return res.status(400).json({ message: err.message });
                }
                res.status(200).json({ message: 'Transaction updated successfully' });
            }
        );
    });
};

// Delete a transaction by ID
exports.deleteTransaction = (req, res) => {
    const { id } = req.params;
    
    // First, check if the transaction exists
    db.get('SELECT * FROM transactions WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        // Delete the transaction
        db.run('DELETE FROM transactions WHERE id = ?', [id], function (err) {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            res.status(200).json({ message: 'Transaction deleted successfully' });
        });
    });
};

// Get a summary of transactions (total income, total expenses, balance)
exports.getSummary = (req, res) => {
    const { category, startDate, endDate } = req.query;

    let query = `SELECT type, SUM(amount) AS total FROM transactions WHERE 1=1`;
    let params = [];

    // Apply category filter if provided
    if (category) {
        query += ` AND category = ?`;
        params.push(category);
    }

    // Apply date range filter if provided
    if (startDate) {
        query += ` AND date >= ?`;
        params.push(startDate);
    }
    if (endDate) {
        query += ` AND date <= ?`;
        params.push(endDate);
    }

    query += ` GROUP BY type`;

    db.all(query, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        let income = 0;
        let expenses = 0;

        rows.forEach(row => {
            if (row.type === 'income') {
                income = row.total;
            } else if (row.type === 'expense') {
                expenses = row.total;
            }
        });

        const balance = income - expenses;

        res.json({
            totalIncome: income || 0,
            totalExpenses: expenses || 0,
            balance: balance || 0
        });
    });
};




