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