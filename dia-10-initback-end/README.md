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
npx sequelize-cli init --dir src

````

````
npx sequelize-cli model:generate --name Produto --attributes nome:string,preco:float
````
````
npx sequelize-cli db:migrate
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
INSERT INTO produto (nome, preco) VALUES ('Nome do Produto', 10.99);
````
1 - Selecionar todos os produtos:
````
SELECT * FROM produto;
````
2 - Selecionar um produto específico por ID:
 ````
SELECT * FROM produto WHERE id = 1;
````
3 - Atualizar um produto existente:
````
UPDATE produto SET nome = 'Novo Nome', preco = 15.99 WHERE id = 1;
````
4 - Excluir um produto:
````
DELETE FROM produto WHERE id = 1;
````

