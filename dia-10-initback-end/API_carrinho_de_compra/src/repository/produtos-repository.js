const { Produto } = require('../models');

async function getProdutos() {
  console.log('Produto', Produto);
  return Produto.findAll();
}

async function getProduto(id) {
  return Produto.findByPk(id, { attributes: ['id', 'nome'] });
}

async function addProduto(produto) {
  try {
    const newAluno = await Produto.create({ nome: produto.nome });
    console.log('New Produto:', newAluno); // Add this logging statement
    return newAluno;
  } catch (error) {
    console.error('Error creating produto:', error);
    throw error;
  }
}


async function deleteProduto(id) {
  return Produto.destroy({ where: { id } });
}

async function editProduto(produto) {
  try {
    const updatedAluno = await Produto.findByPk(produto.id);

    if (updatedAluno) {
      updatedAluno.nome = produto.nome;
      await updatedAluno.save();
      return updatedAluno;
    }
  } catch (error) {
    console.error("Erro ao editar produto:", error);
    throw error;
  }
}

module.exports = {
  getProdutos,
  addProduto,
  getProduto,
  deleteProduto,
  editProduto
};