# npm init

### Iniciando as dependencias
````
$ npm i nodemon express
````
- Erros
````
$ npm i cors
````
- Banco De Dados [install](https://typeorm.io/#installation)
````
npm i typeorm mariadb mysql reflect-metadata
````

### Iniciando banco de dados 
Criando entidades Type ORM
````
npx typeorm entity:create src/entities/ProdutosEntidade
npx typeorm migration:create src/migrations/ProdutosMigracao 
npx typeorm migration:run
````

Sequelize
````
npx sequelize-cli init
````
````
npx sequelize-cli model:generate --name Produto --attributes nome:string,preco:float
````
````
npx sequelize-cli db:migrate
````
Novas colunas de produtos
````
descricao: {
    type: DataTypes.TEXT,
  },
  quantidade_estoque: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
````

Adicionando uma coluna a uma tabela
````
queryInterface.addColumn('Produtos', 'img', { type: DataTypes.STRING });
````
Removendo uma coluna
````
queryInterface.removeColumn('Produtos', 'img');
````
Adicionando uma coluna a uma tabela
````
queryInterface.addColumn('Produtos', 'quantidade_estoque', { type: DataTypes.INTEGER });
````
Removendo uma coluna
````
queryInterface.removeColumn('Produtos', 'quantidade_estoque');
````
Adicionando uma coluna a uma tabela
````
queryInterface.addColumn('Produtos', 'categoria_id', { type: DataTypes.INTEGER });
````
Removendo uma coluna
````
queryInterface.removeColumn('Produtos', 'categoria_id');
````
 
Criando tabela categoria:
````
const Categoria = sequelize.define('Categorias', {
  categoria_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
````

Criando tabela Pedidos:
````
const Pedido = sequelize.define('Pedidos', {
  pedido_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_pedido: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pendente', // Pode ser "pendente", "processando", "enviado", etc.
  },
});
````

Criando tabela ItemPedido:
````
const ItemPedido = sequelize.define('ItemPedido', {
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco_unitario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
````

### Comando SQL
1 - CRIAR A TABELA
````
CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);
````
________________________________
0 - Inserir um novo produto:
````
INSERT INTO Produtos (nome, preco) VALUES ('Nome do Produto', 10.99);
````
1 - Selecionar todos os produtos:
````
SELECT * FROM Produtos;
````
2 - Selecionar um produto específico por ID:
 ````
SELECT * FROM Produtos WHERE id = 1;
````
3 - Atualizar um produto existente:
````
UPDATE Produtos SET nome = 'Novo Nome', preco = 15.99 WHERE id = 1;
````
4 - Excluir um produto:
````
DELETE FROM Produtos WHERE id = 1;
````
5 - Criando uma nova coluna em uma tabela:
````
ALTER TABLE Produtos ADD img VARCHAR(255);
````
6 - Removendo coluna da tabela
````
ALTER TABLE Produtos DROP COLUMN img;
````



```js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPedido extends Model {
    static associate(models) {
      // Define association with Pedido
      ItemPedido.belongsTo(models.Pedido, {
        foreignKey: 'id_pedido',
        as: 'pedido',
      });

      // Define association with Produto
      ItemPedido.belongsTo(models.Produto, {
        foreignKey: 'id_produto',
        as: 'produto',
      });
    }
  }

  ItemPedido.init({
    id_pedido: DataTypes.INTEGER,
    id_produto: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    preco_unitario: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ItemPedido',
  });

  return ItemPedido;
};
```
