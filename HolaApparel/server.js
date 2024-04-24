const express = require('express');
const path = require('path');

const app = express();
const PORT =3000;

// Define the directory for your webpages
const HolaWebpages = path.join(__dirname, 'HolaWebpages',);

// Serve static files from the directory
app.use(express.static(HolaWebpages));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(HolaWebpages, 'Homepage.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(HolaWebpages, 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(HolaWebpages, 'signup.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(HolaWebpages, 'cart.html'));
});

app.get('/Shop', (req, res) => {
  res.sendFile(path.join(HolaWebpages, 'Shop.html'));
});
// Handle 404 - Not Found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(HolaWebpages, '404.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
