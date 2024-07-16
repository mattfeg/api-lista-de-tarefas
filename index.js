const express = require("express");
const app = express();
const cors = require("cors")
const port = 8000;

const tarefaRoutes = require('./src/routes/tarefaRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const { lockIt } = require("./src/utils");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Olá mundo.");
});

app.use('/usuarios', usuarioRoutes);
app.use('/tarefas', lockIt, tarefaRoutes);

app.all("*", (req, res) => {
    res.status(404).send("Rota não encontrada");
});

app.listen(port, () => {
    console.log(`Serviço de pé: http://localhost:${port}`);
})
