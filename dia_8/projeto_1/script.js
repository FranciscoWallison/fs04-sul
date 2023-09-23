// URL do arquivo JSON que você deseja carregar
const FILE_CLIENTES = "clientes.json";

fazerRequisicao = async () => {
  return await fetch(FILE_CLIENTES)
    .then((response) => {
      // Verifique se a resposta da solicitação é bem-sucedida (status 200)
      if (!response.ok) {
        throw new Error("Não foi possível carregar o arquivo JSON.");
      }
      // Parseie a resposta JSON
      return response.json();
    })
    .then((data) => {
      // Faça algo com os dados JSON aqui
      console.log(data); // Por exemplo, imprima os dados no console

      return data;
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
      return error;
    });
};

// Use a função fetch para fazer uma solicitação HTTP GET para o arquivo JSON
window.clientes = fazerRequisicao();

consutlar = async () => {
  // consultar

  const termoDeBusca = "Tonya Ritchie"; // O termo que você quer buscar

  console.log("cliente: ",  await window.clientes);

  let data = await window.clientes;

  const resultadosFiltrados =  data.filter((cliente) => {
    console.log("cliente.name.toLowerCase(): ", cliente.name.toLowerCase());
    // Use a função toLowerCase() para tornar a busca case-insensitive
    return cliente.name.toLowerCase().includes(termoDeBusca.toLowerCase());
  });

  window.clientes = resultadosFiltrados;
  await add_table();
};


const add_table = async () => {
  let dados_cliente = ``;
  let clientes = await window.clientes;

  if (clientes.length) {
    clientes.forEach((cliente, i) => {
      dados_cliente += `
        <tr>
          <td>${i + 1}</td>
          <td>${cliente.name}</td>
          <td>${cliente.email}</td>
          <td>${cliente.address}</td>
          <td>${cliente.city}</td>
          <td>${cliente.state}</td>
          <td>${cliente.cep}</td>
          <td>${cliente.phoneNumber}</td>
          <td>
              <button id="edit-${
                i + 1
              }" class="btn btn-warning btn-sm" onclick="editar()" >Editar</button>
              <button id="delete-${
                i + 1
              }" class="btn btn-danger btn-sm" onclick="deletar()" >Deletar</button>
          </td>
        </tr>    
      `;

      // console.log("dados_cliente: ", dados_cliente, cliente, i)
    });

    document.getElementById("ifor_clientes").innerHTML = dados_cliente;
  }
};

add_table();

// deletar
const arrayDeObjetos_deletar = [
  { id: 1, nome: "Objeto 1" },
  { id: 2, nome: "Objeto 2" },
  { id: 3, nome: "Objeto 3" },
];

const indiceParaRemover = 1;

arrayDeObjetos_deletar.splice(indiceParaRemover, 1);

// editar
const arrayDeObjetos_editar = [
  { id: 1, nome: "Objeto 1" },
  { id: 2, nome: "Objeto 2" },
  { id: 3, nome: "Objeto 3" },
];

const idParaEditar = 2; // O id do objeto que você deseja editar

// Encontre o índice do objeto que deseja editar
const indiceParaEditar = arrayDeObjetos_editar.findIndex(
  (objeto) => objeto.id === idParaEditar
);

if (indiceParaEditar !== -1) {
  // Atualize as propriedades do objeto desejado
  arrayDeObjetos_editar[indiceParaEditar].nome = "Novo Nome";
  // Você pode adicionar outras atualizações aqui conforme necessário
} else {
  console.log("Objeto não encontrado.");
}
