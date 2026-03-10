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
 * Route mặc định - trả về landing page
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'statistic', 'index.html'));
});

/**
 * Khởi động server
 */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
