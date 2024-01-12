const express = require("express");
const app = express();
const port = 3000;

const cartao = "00.000.00.0.0";
const senha = "4258";

app.use(express.json());

// CRUD
app.get("/user", (req, res) => {
  // resposta
  res.status(200);
  res.send([{
    nome: "chico"
  }]);

  // resposta
  // res.status(404);
  // res.send([]);
});

app.post("/user", (req, res) => {


  res.status(201);
  res.send();

  // resposta
  res.status(404);
  // res.send("Nome incompleto");
});

app.put("/user", (req, res) => {
  // resposta
  res.send("Atualizar Usuario");
});

app.delete("/user", (req, res) => {
  // resposta
  res.send("Deletar Usuario");
});

app.get("/mensagem", (req, res) => {
  res.send("texto");
});

app.listen(port, () => {
  console.log(` Projeto online em http://localhost:${port}`);
});
