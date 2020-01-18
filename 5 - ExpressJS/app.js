const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

// HANDLEBARS
// const expressHbs = require('express-handlebars');
// app.engine(
//     'hbs', 
//     expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine', 'hbs');

// PUG
// app.set('view engine', 'pug'); // B/c we installed pug

// EJS
app.set('view engine', 'ejs');

app.set('views', 'views'); // Where to find these templates

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false})); // Parse
app.use(express.static(path.join(__dirname, 'public')));  // Allows for static folders - css

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use( (req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: '404: Page Not Found'});
});

app.listen(3000);