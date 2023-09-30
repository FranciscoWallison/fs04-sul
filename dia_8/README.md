### Fila 
````
pop(): Remove o último elemento de um array e retorna esse elemento.
````
````
push(): Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
````
### Pilh
````
shift(): Remove o primeiro elemento de um array e retorna esse elemento. Os índices dos elementos restantes são atualizados.
````
````
unshift(): Adiciona um ou mais elementos no início de um array e retorna o novo comprimento do array.
````


map(): O método map() é usado para criar um novo array com os resultados de chamar uma função fornecida em cada elemento do array original.


indexOf(): O método indexOf() é usado para encontrar o primeiro índice em que um determinado elemento é encontrado no array. Se o elemento não estiver presente, o método retornará -1.


find() é outra função muito útil quando se trata de manipulação de arrays em JavaScript.
Ele é usado para encontrar o primeiro elemento em um array que satisfaça uma determinada condição.
Assim que o elemento for encontrado, o método find() retornará esse elemento e não continuará a busca.


### Funções 
```js


// Expressões

// Irar aceitar onde for chamado ou independente do lugar
function upperName(nome) {
    return name.toUpperCase();
}
console.log(toUpperCase('chico'));

// ===
// Outra forma 
const upperName =  function (nome) {
    return name.toUpperCase();
}
//Não pode ser chamado antes da criação da função
console.log(toUpperCase('chico'));

// ==

// As arrow functions permitem ter um retorno implícito,
// que são valores retornados sem ter que usar a palavar return
const upperName = (nome) => {
    return name.toUpperCase();
}
// Exemplo
const upperName = (nome) => name.toUpperCase();
console.log(toUpperCase('chico'));

// ========================================================================
// Parâmetros Rest
function tamanhoArray(...theArgs) {
  console.log(theArgs.length);
}
fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3

// Parâmetros simples 
function mostrarList(empresa, clientes) {
    for (let index = 0; index < clientes.length; index++) {
        const cliente = clientes[index];
        console.log(empresa, cliente)
    }
}

mostrarList('google', ['Chico', 'Ana']);
// Parâmetros Rest
function mostrarList(empresa, ...clientes) {
    for (let index = 0; index < clientes.length; index++) {
        const cliente = clientes[index];
        console.log(empresa, cliente)
    }
}
mostrarList('google', 'Chico', 'Ana');


// Parâmetros Rest com outras propriedades Array
const numeros = [1, 5,  15];

const maior = Math.max(1, 5,  15);
// erro
const maior = Math.max(numeros);
// sucesso
const maior = Math.max(...numeros);

console.log(maior)
// outras formas
const numeros2 = [...numeros, 25, 30, 60];
console.log(numeros2);


// Parâmetros Rest com outras propriedades Objetos
const usuario = {
  nome: "chico",
  idade: 27
}

// antiga forma
// usuario.email = "francisco@gmail.com";

// rest
usuarioEmail = {...usuario, email: "francisco@gmail.com"};

console.log(usuarioEmail);


// Pegando dados Usando Desestruturando objeto 
function handleMouse(event) {
    const { clienteX, clienteY } = event;
    console.log(clienteX, clienteY);
}
// ou
function handleMouse({ clienteX, clienteY }) {
    console.log(clienteX, clienteY);
}

document.addEventListener('click', handleMouse);

// Desestruturando Com array
const frutas = ['banana', 'uva'];
const [fruta_1, fruta_2] = frutas;
console.log(fruta_2);

// Desestruturando (hook)

const useQuadrado = [
    4, 
    function (lado) {
        return 4 * lado;
    }
];

const [lados, perimetro] = useQuadrado;

console.log(lados);
console.log(perimetro(10));


// UM POUCO DE CLASS e analisando objetos

// Classe Pai: Animal
function Animal(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Método da classe Pai
Animal.prototype.dizerInfo = function() {
  console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos de idade.`);
};

// Classe Filha: Cachorro
function Cachorro(nome, idade, raca) {
  // Chame o construtor da classe Pai com 'call' para herdar seus atributos
  Animal.call(this, nome, idade);
  this.raca = raca;
}

// Estabeleça a herança prototípica da classe Pai para a classe Filha
Cachorro.prototype = Object.create(Animal.prototype);

// Método específico da classe Filha
Cachorro.prototype.latir = function() {
  console.log('Au au!');
};

// Crie objetos da classe Animal e Cachorro
var animal = new Animal("Animal Genérico", 3);
var cachorro = new Cachorro("Rex", 2, "Labrador");

// Use os métodos das classes
animal.dizerInfo(); // Saída: Eu sou Animal Genérico e tenho 3 anos de idade.
cachorro.dizerInfo(); // Saída: Eu sou Rex e tenho 2 anos de idade.
cachorro.latir(); // Saída: Au au!
```

[Ferramentas sobre DOM: introdução](https://chrome.google.com/webstore/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg)


### Document

    Para caminha os objetos se utiliza os pontos.
    Manipulando o DOM

```js

// Pegar o primeiro elemento filho
const HTML = document.firstElementChild

// Pegar o primeiro elemento filho do filho
const HEAD = document.firstElementChild.firstElementChild

// Pegar o ultimo elemento filho
const BODY = document.lastElementChild
// Pegar o ultimo elemento filho e pegando o primeiro filho
const BODY_FIRST_FILHO = document.lastElementChild.firstElementChild

// internoHTML = atribuir um texto

// hender.style.color = 'red'

// Os methodos para pegar informações mais rapido
document.querySelector('input')

```

### Promise

````
  Em JavaScript, async, await e Promise são recursos usados para trabalhar com operações assíncronas. Eles são especialmente úteis quando você precisa lidar com tarefas que levam algum tempo para serem concluídas, como fazer chamadas de rede, ler arquivos ou realizar operações intensivas de CPU, sem bloquear a execução do restante do código.
````

  Uma Promise é um objeto que representa um valor que pode não estar disponível ainda, mas que será resolvido em algum momento no futuro.
  Uma Promise tem três estados: pendente (pending), resolvida (fulfilled) e rejeitada (rejected).
  Você pode criar uma Promise usando o construtor Promise. Ela recebe uma função com dois argumentos, resolve e reject, que são funções que você chama quando a operação assíncrona é concluída com sucesso ou falha, respectivamente.


```js

const minhaPromise = new Promise((resolve, reject) => {
  // Simula uma operação assíncrona que leva algum tempo
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve('Operação bem-sucedida');
    } else {
      reject('Erro na operação');
    }
  }, 2000);
});


```

### async/await:
#### async
  é uma palavra-chave que é usada para definir uma função como assíncrona. Funções assíncronas retornam Promises automaticamente.

#### await 
  é usado dentro de funções assíncronas para esperar que uma Promise seja resolvida antes de continuar a execução do código. Ele permite que você escreva código assíncrono de maneira mais síncrona, tornando-o mais legível.




```js
window.onload = function() {
    // Seu código JavaScript aqui
    // Isso será executado após a página ser totalmente carregada
};

```