const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // ✅ singular "layout"

// Routes
const mainroutes = require('./routes/index');
app.use('/', mainroutes);

module.exports = app;
