const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("on");
  });

// Rotas
const produtosRouter = require('./routes/produtos')

// Prefixo da rota de /produtos
app.use('/produtos', produtosRouter);

// Adicione mais rotas conforme necessário

// Exporte a instância do Express para ser utilizada em outros arquivos
module.exports = app;