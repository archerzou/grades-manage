const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

const expressStatusMonitor = require('express-status-monitor');
const connectDB = require('./config/db');

// Make all variables from our .env file available in our process
dotenv.config({ path: '.env' });

// Init express server
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares & configs setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable('x-powered-by');
app.use(expressStatusMonitor());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// api routes
app.use(require('./routes'));

const port = process.env.PORT || 8080;
const address = process.env.SERVER_ADDRESS || 'localhost';

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

const server = app.listen(port, () => console.log(`Server running on http://${address}:${port}`));

module.exports = server;
