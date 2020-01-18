const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// EJS
app.set('view engine', 'ejs');

app.set('views', 'views'); // Where to find these templates

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false})); // Parse
app.use(express.static(path.join(__dirname, 'public')));  // Allows for static folders - css

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);