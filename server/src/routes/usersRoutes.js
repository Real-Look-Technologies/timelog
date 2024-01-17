const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/UserController.js');

const userController = new UserController();

router.get('/api/users', (req, res) => {
    userController.index(req, res);
});

router.get('/api/users/:id', (req, res) => {
    userController.show(req, res);
});

router.post('/api/users/:id', (req, res) => {
    userController.create(req, res);
});

router.put('/api/users/:id', (req, res) => {
    userController.update(req, res);
});

router.delete('/api/users/:id', (req, res) => {
    userController.destroy(req, res);
});

module.exports = router;