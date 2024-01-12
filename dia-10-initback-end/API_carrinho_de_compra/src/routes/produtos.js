const express = require("express");
const router = express.Router();

const listaDeProdutos = [
  {
    nome: "telefone",
    preco: 1000.5,
    imagem: "telefone.png",
  },
  {
    nome: "telefone",
    preco: 1000.5,
    imagem: "telefone.png",
  },
];

// GET /produtos
// curl --request GET \
//  --url http://localhost:3000/produtos \
//  --header 'User-Agent: insomnia/8.2.0'
router.get("/", async (req, res) => {
  //   res.json(await getAlunos());
  res.json(listaDeProdutos);
});


// GET /produtos/:id
// curl --request GET \
//   --url http://localhost:3000/produtos/15 \
//   --header 'User-Agent: insomnia/8.2.0'
// router.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     const aluno = await getAluno(id);
//     console.log(aluno);
//     if (aluno) {
//         res.json(aluno);
//     } else {
//         res.status(404);
//         res.json();
//     }
// });


module.exports = router;