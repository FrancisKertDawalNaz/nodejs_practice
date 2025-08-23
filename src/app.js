const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main'); 

// Routes
const mainroutes = require('./routes/index');
const aboutroutes = require('./routes/about');
const project = require('./routes/project');
const contactroutes = require('./routes/contact');
app.use('/', mainroutes);
app.use('/', aboutroutes);
app.use('/', project);
app.use('/', contactroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
