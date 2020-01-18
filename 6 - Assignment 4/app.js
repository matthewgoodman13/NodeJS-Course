// IMPORTS
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

/////////////////////////////////////////////////
const app = express();

// TO PARSE BODY
app.use(bodyParser.urlencoded({extended: false})); // Parse

// FOR CSS FILES
app.use(express.static(path.join(__dirname, 'public')));  // Allows for Static Folders - CSS

// SET VIEW ENGINE TO EJS
app.set('view engine', 'ejs');
app.set('views', 'views'); // Where to find these templates

// ROUTES

const usersRoute = require('./routes/users');
app.use(usersRoute);

app.use('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, 'views','index.html'));    // STATIC HTML PAGES
    res.render('index', {pageTitle: 'Home', path: '/'});
});

app.listen(3000);