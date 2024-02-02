const express = require('express');
const path = require('path');
const users = require('./usersRoutes.js');
const errorMiddleware = require('../middlewares/error.js');

module.exports = app => {
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(users);
    app.use(errorMiddleware);
};