const express = require("express");
const path = require("path");
const { carros } = require('./banco_dados/db');

const app = express();
const port = 3000;

let cartao = "36666699"
let cvv = "369"

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public"))
})

app.get("/mensagem", (req, res) => {
    res.send("Olá turma da sala 603")
})



app.get("/carros",  (req, res) => {
    return res.json(carros);
})

app.listen(port, () => {
    console.log(`O servidor está OK! http://localhost:${port}`)
})