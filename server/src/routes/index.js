const express = require('express');
const users = require('./usersRoutes.js');
const errorMiddleware = require('../middlewares/error.js');

module.exports = app => {
    app.use(express.json());
    app.use(users);
    app.use(errorMiddleware);
};