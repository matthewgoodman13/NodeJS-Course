const express = require('express');
const path = require('path');

const app = express();

const userRoute = require('./userRoute');
const mainRoute = require('./mainRoute');


app.use('/users', userRoute);
app.use(mainRoute);

app.use(express.static(path.join(__dirname, 'public')));  // Allows for static folders - css


app.listen(3000);