const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const { PORT } = process.env;

const port = PORT || 8082;

app.use(express.static(path.join(__dirname, 'public')));

// Define routes
const routes = [
  '/members/docs',
  '/elections/docs',
  '/locations/docs',
  '/auth/docs'
];

// Serve HTML files for each route
routes.forEach(route => {
  app.get(route, (req, res) => {
    const fileName = route.split('/')[1]; // Extract the file name from the route
    res.sendFile(path.join(__dirname, 'public', `${fileName}.html`));
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});