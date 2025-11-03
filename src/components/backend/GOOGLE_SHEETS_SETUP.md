# Google Sheets Integration Setup Guide

This guide will help you connect your contact form to Google Sheets when you deploy your application.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Google Sheets API for your project

## Step 2: Create Service Account Credentials

1. In your Google Cloud project, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details and click "Create"
4. Grant the service account access to your project (Role: Editor)
5. Create a key for the service account (JSON format)
6. Download the JSON key file

## Step 3: Set Up Your Google Sheet

1. Create a new Google Sheet
2. Note the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
3. Share your sheet with the service account email (found in your JSON credentials file)
4. Make sure to give "Editor" permission to the service account

## Step 4: Configure Your Deployment Environment

When deploying your application, set these environment variables:

```
GOOGLE_SHEET_ID=your-google-sheet-id
GOOGLE_CREDENTIALS={"type":"service_account","project_id":"...","private_key":"..."}
```

Note: For `GOOGLE_CREDENTIALS`, use the entire content of your JSON credentials file, properly escaped as a string.

## Step 5: Deploy Your Application

1. Deploy your application with the environment variables set
2. Test your contact form to ensure data is being sent to Google Sheets

## Troubleshooting

- Check server logs for any Google Sheets API errors
- Verify that your service account has proper permissions on the Google Sheet
- Ensure your credentials are correctly formatted in the environment variable

## Security Notes

- Never commit your credentials.json file to version control
- Always use environment variables for sensitive information in production
- Regularly rotate your service account keys for better security