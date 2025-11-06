# SPA Deep Link 404 Fix

This app uses React Router with `BrowserRouter`. On static hosts, refreshing a deep link (e.g., `/courses/cybersecurity`) can return 404 unless the host is configured to serve `index.html` for unknown paths. Use one of the following configurations:

Netlify:
- File: `public/_redirects`
- Content: `/* /index.html 200`
- Deploy as usual; Netlify will route all paths to `index.html`.

Vercel:
- File: `vercel.json` at repo root
- Content:
```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
- Build with Vite and deploy; Vercel will rewrite all routes to `index.html`.

Nginx (example):
```
location / {
  try_files $uri /index.html;
}
```

Apache (example .htaccess in the build output):
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

AWS S3 + CloudFront:
- Set the S3 Static Website Hosting error document to `index.html`.
- Configure CloudFront custom error responses (404/403) to return `/index.html` with 200.

Node/Express server (optional):
```
import express from 'express';
import path from 'path';

const app = express();
const dist = path.join(process.cwd(), 'dist');

app.use(express.static(dist));
app.get('*', (_req, res) => {
  res.sendFile(path.join(dist, 'index.html'));
});

app.listen(5000);
```

After applying one of these, deep links like `/courses/cybersecurity` will load correctly on refresh and when shared.