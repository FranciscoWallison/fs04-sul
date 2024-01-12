const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 3000

// Rotas
const produtosRouter = require('./routes/produtos')

app.use(express.json());

// Prefixo da rota de /produtos
app.use('/produtos', produtosRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});