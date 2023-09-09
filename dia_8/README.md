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

````
