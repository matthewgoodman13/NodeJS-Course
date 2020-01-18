const express = require('express');

const path = require('path');

const rootDir = require('../util/path')
const adminData = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {

    // Old: output static html
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    const products = adminData.products;

    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path:'/', 
        hasProducts: 
        products.length > 0,
        activeShop: true,
        productCSS: true    
    }); // Will auto look for .pug files


});


// Also have app.get, app.use, app.post, delete, patch, put

module.exports = router;