const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Serve static files từ thư mục statistic
 * Bao gồm HTML, CSS, JS, images, favicon...
 */
app.use(express.static(path.join(__dirname, 'statistic')));

/**
 * Catch-all: serve index.html for directory-like paths
 * Handles paths like /csplatform, /csplatform/, etc.
 */
app.get('*', (req, res) => {
  const reqPath = req.path.replace(/\/$/, '') || '/';
  const filePath = path.join(__dirname, 'statistic', reqPath);
  const indexPath = path.join(filePath, 'index.html');
  const htmlPath = filePath + '.html';

  // Try: directory/index.html, then path.html, then root index.html
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.sendFile(htmlPath, (err2) => {
        if (err2) {
          res.sendFile(path.join(__dirname, 'statistic', 'index.html'));
        }
      });
    }
  });
});

/**
 * Khởi động server
 */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
