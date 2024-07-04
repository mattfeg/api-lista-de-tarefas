const express = require("express");
const router = express.Router();
const { executarSQL } = require("../database/index");
const { updateTarefa } = require("../controllers/tarefaController");

router.get('/', async (req, res) => {
    res.send(await executarSQL("SELECT * FROM tarefas;"));
});
router.post('/', async (req, res) => {
    res.send(await executarSQL(`INSERT INTO tarefas (tarefa_titulo, tarefa_descricao) VALUES ("${req.body.tarefa_titulo}", "${req.body.tarefa_descricao}");`));
});
router.put('/:id', async (req, res) => {
    res.send(await updateTarefa(req.params.id, req.body));
});
router.delete('/:id', async (req, res) => {
    res.send(await executarSQL(`DELETE FROM tarefas WHERE tarefa_id = ${req.params.id};`));
});

module.exports = router;