// CREATING A SERVER
// Core Modules: http (launch server and send requests), https (launch ssl server), fs, path, os

const http = require('http'); // Importing http.  Adding ./ would look for something local
const routes = require('./routes'); // Adds .js automatically

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);