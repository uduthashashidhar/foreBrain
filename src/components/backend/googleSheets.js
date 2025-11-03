// googleSheets.js
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Function to initialize Google Sheets API
async function getGoogleSheetsClient() {
  try {
    // When deployed, use environment variables for credentials
    let credentials;
    
    if (process.env.GOOGLE_CREDENTIALS) {
      // For production: use environment variable
      credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    } else {
      // For development: use local file
      const credentialsPath = path.join(__dirname, 'credentials.json');
      if (fs.existsSync(credentialsPath)) {
        credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
      } else {
        console.warn('Google credentials file not found. Skipping Google Sheets integration.');
        return null;
      }
    }

    // Create JWT client
    const auth = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    // Return Google Sheets API client
    return google.sheets({ version: 'v4', auth });
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    return null;
  }
}

// Function to append data to Google Sheet
async function appendToSheet(data) {
  try {
    const sheets = await getGoogleSheetsClient();
    if (!sheets) return false;

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      console.warn('Google Sheet ID not found in environment variables.');
      return false;
    }

    const range = 'Sheet1!A:E'; // Name, Email, Phone, Message, Timestamp
    const valueInputOption = 'USER_ENTERED';
    
    const values = [
      [data.name, data.email, data.phone || '', data.message, new Date().toISOString()]
    ];
    
    const resource = {
      values,
    };

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });

    console.log('Data appended to Google Sheet:', result.data);
    return true;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return false;
  }
}

module.exports = { appendToSheet };