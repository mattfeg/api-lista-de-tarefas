const express = require("express");
const app = express();
const port = 8000;

const tarefaRoutes = require('./src/routes/tarefaRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Olá mundo.");
});

app.use('/tarefas', tarefaRoutes);

app.all("*", (req, res) => {
    res.status(404).send("Página não encontrada");
});

app.listen(port, () => {
    console.log(`Serviço de pé: http://localhost:${port}`);
})
