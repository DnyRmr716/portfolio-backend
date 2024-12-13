require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/landing', require('./routes/landing'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/projects', require('./routes/projects'));

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
