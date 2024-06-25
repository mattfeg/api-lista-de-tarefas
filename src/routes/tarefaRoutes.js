const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("listar tarefas");
});
router.post('/', (req, res) => {
    res.send("criar tarefas");
});
router.put('/:id', (req, res) => {
    res.send("editar tarefas");
});
router.delete('/:id', (req, res) => {
    res.send("deletar tarefas");
});

module.exports = router;