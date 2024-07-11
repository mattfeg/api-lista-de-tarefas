const express = require('express');
const { logar } = require('../controllers/usuarioController');
const router = express.Router();

router.post('/login', async (req, res) => {
    res.send(await logar(req.body));
});

module.exports = router;