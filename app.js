const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// DataBase Config
require('./config/db');

const app = express();

const poll = require('./routes/poll');

// Set up Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Enable CORS
app.use(cors());

app.use('/poll', poll);

const port = 3000;

// Start Server
app.listen(port, ()=> console.log(`Server started on port ${port}`))
