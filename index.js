const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Olá mundo.");
});

app.get('/boas-vindas', (req, res) => {
    res.send(`Seja bem-vindo(a)`);
});

app.get('/boas-vindas/:nome', (req, res) => {
    res.send(`Seja bem-vindo(a) ${req.params.nome}`);
});

app.get('/boas-vindas/:nome/:genero', (req, res) => {
    res.send(`Seja bem-vindo(a) ${req.params.nome} do genero ${req.params.genero}`);
});

app.listen(port, () => {
    console.log(`Serviço de pé: http://localhost:${port}`);
})
