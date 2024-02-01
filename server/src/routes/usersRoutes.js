const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const userController = new UserController();

router.get('/api/users', userController.index);
router.get('/api/users/:id', userController.show);
router.post('/api/users', userController.create);
router.put('/api/users/:id', userController.update);
router.delete('/api/users/:id', userController.destroy);

module.exports = router;