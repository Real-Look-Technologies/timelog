const { Router } = require('express');
const router = Router();

router.get('/api/users', (req, res) => {
    res.status(200).send({
        message: "Lista de users!"
    });
});

router.get('/api/users/:id', (req, res) => {
    res.status(200).send({
        message: `User ${req.params.id}`
    });
});

router.post('/api/users/:id', (req, res) => {
    res.status(200).send({
        message: `User ${req.params.id}`
    });
});

router.put('/api/users/:id', (req, res) => {
    res.status(200).send({
        message: `User ${req.params.id}`
    });
});

router.delete('/api/users/:id', (req, res) => {
    res.status(200).send({
        message: `User ${req.params.id}`
    });
});

module.exports = router;