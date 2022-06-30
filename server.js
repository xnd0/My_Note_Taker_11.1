// --------------------- //
// ----- server.js ----- //
// --------------------- //


const express = require('express');
const path = require('path');
const api = require('./routes/index.js');


const PORT = process.env.PORT || 3001;


const app = express();


