const express = require('express');
const route = express.Router();
const controller = require('../controller/controller')

route.post('/blogpost',controller.create );
route.get('/getblog', controller.getdata);

module.exports = route;
