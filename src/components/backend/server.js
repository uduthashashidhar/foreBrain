// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

// LOCAL relative require (important)
const Message = require('./models/Message');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || true }));
app.use(rateLimit({ windowMs: 60 * 1000, max: 40 }));

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('MONGO_URI missing in .env (place .env in backend folder)');
  process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected ✅'))
  .catch(err => { console.error('MongoDB connection error ❌', err); process.exit(1); });

app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'All fields required' });
    if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: 'Invalid email' });

    const msg = new Message({ name: name.trim(), email: email.trim().toLowerCase(), message: message.trim() });
    await msg.save();
    return res.status(201).json({ message: 'Message saved' });
  } catch (err) {
    console.error('POST /api/messages error', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
