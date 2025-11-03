// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');
const { appendToSheet } = require('./googleSheets');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || true }));
app.use(rateLimit({ windowMs: 60 * 1000, max: 40 }));

// Create messages directory if it doesn't exist
const messagesDir = path.join(__dirname, 'messages');
if (!fs.existsSync(messagesDir)) {
  fs.mkdirSync(messagesDir, { recursive: true });
}

// CSV file path
const csvFilePath = path.join(__dirname, 'contact_submissions.csv');

// Function to convert JSON to CSV row
const jsonToCsvRow = (data) => {
  return `"${data.name.replace(/"/g, '""')}","${data.email.replace(/"/g, '""')}","${(data.phone || '').replace(/"/g, '""')}","${data.message.replace(/"/g, '""')}","${data.createdAt}"\n`;
};

// Initialize CSV file with headers if it doesn't exist
if (!fs.existsSync(csvFilePath)) {
  fs.writeFileSync(csvFilePath, '"Name","Email","Phone","Message","Timestamp"\n');
}

app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'All fields required' });
    if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: 'Invalid email' });

    if (phone && phone.trim()) {
      const digits = phone.replace(/\D/g, '');
      if (digits.length < 7 || digits.length > 15) {
        return res.status(400).json({ message: 'Invalid phone number' });
      }
    }

    const messageData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      message: message.trim(),
      createdAt: new Date()
    };
    
    // Append to CSV file
    fs.appendFileSync(csvFilePath, jsonToCsvRow(messageData));
    
    // Send directly to Google Sheets
    try {
      const result = await appendToSheet(messageData);
      if (!result) {
        return res.status(500).json({ message: 'Failed to send message to Google Sheets' });
      }
      console.log('Data sent to Google Sheets');
      return res.status(201).json({ message: 'Message sent to Google Sheets' });
    } catch (sheetError) {
      console.error('Error sending to Google Sheets:', sheetError);
      return res.status(500).json({ message: 'Failed to send message to Google Sheets' });
    }
  } catch (err) {
    console.error('POST /api/messages error', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to download CSV file
app.get('/api/messages/download', (req, res) => {
  try {
    if (fs.existsSync(csvFilePath)) {
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=contact_submissions.csv');
      return res.sendFile(csvFilePath);
    } else {
      return res.status(404).json({ message: 'No data available' });
    }
  } catch (err) {
    console.error('GET /api/messages/download error', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to get all messages
app.get('/api/messages', (req, res) => {
  try {
    // Since we're not storing JSON files anymore, we'll return a message
    return res.status(200).json({ 
      message: 'Messages are now sent directly to Google Sheets and not stored locally',
      sheetId: process.env.GOOGLE_SHEET_ID
    });
  } catch (err) {
    console.error('GET /api/messages error', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
