require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, pin } = req.body;

  const sql = "SELECT * FROM users WHERE username = ? AND pin = ?";

  db.query(sql, [username, pin], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      res.json({ message: "Login successful", user: result[0] });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


app.get('/balance/:userId', (req, res) => {
  const userId = req.params.userId;

  const sql = `
    SELECT balance 
    FROM accounts
    WHERE user_id = ?
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length > 0) {
      res.json({
        balance: result[0].balance
      });
    } else {
      res.status(404).json({
        message: 'Account not found'
      });
    }
  });
});



//transfer money

app.post('/transfer', (req, res) => {
  const { fromId, toUsername, amount } = req.body;

  if (amount <= 0) {
    return res.status(400).json({ message: 'Invalid amount' });
  }

  // 1. Get receiver
  const findUser = "SELECT * FROM users WHERE username = ?";
  db.query(findUser, [toUsername], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(404).json({ message: 'Receiver not found' });
    }

    const toUser = result[0];

    
    const deduct = "UPDATE accounts SET balance = balance - ? WHERE user_id = ?";
    db.query(deduct, [amount, fromId]);

    const add = "UPDATE accounts SET balance = balance + ? WHERE user_id = ?";
    db.query(add, [amount, toUser.id]);

    res.json({ message: 'Transfer successful' });
  });
});