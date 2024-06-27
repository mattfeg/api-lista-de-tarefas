const express = require("express");
const router = express.Router();
const { executarSQL } = require("../database/index");

router.get('/', async (req, res) => {
    res.send(await executarSQL("SELECT * FROM tarefas;"));
});
router.post('/', async (req, res) => {
    res.send(await executarSQL(`INSERT INTO tarefas (tarefa_titulo, tarefa_descricao) VALUES ("${req.body.tarefa_titulo}", "${req.body.tarefa_descricao}");`));
});
router.put('/:id', (req, res) => {
    res.send("editar tarefas");
});
router.delete('/:id', (req, res) => {
    res.send("deletar tarefas");
});

module.exports = router;