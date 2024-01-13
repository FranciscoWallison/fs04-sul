const express = require("express");
const app = express();
const cors = require("cors");
const server = require("./server");

app.use(cors());
app.use(express.json());

// Configurações adicionais do Express aqui

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor Express iniciado na porta ${port}`);
});
