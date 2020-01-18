// Matthew Goodman - Udemy NodeJS - Assignment 1 - Jan 9 2020

const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);

server.listen(3000);