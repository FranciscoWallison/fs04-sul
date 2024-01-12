const express = require("express");
const app = express();

const users = require("./rotas/user");

const port = 8181;
app.use(express.json());


app.get("/", users);

app.listen(port, () => {
    console.log(`Projeto online em http://localhost:${port}`);
});