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

