import faker from "faker";
import fs from "fs";

(async () => {
  // Gere dados fictícios de usuário
  const data_infor_new = "./fakerUsers.json";
  let fakerUsers = [];

  for (let index = 0; index < 30; index++) {
    const fakeUser = {
      name: faker.name.findName(), // Gera um nome fictício
      email: faker.internet.email(), // Gera um e-mail fictício
      address: faker.address.streetAddress(), // Gera um endereço fictício
      city: faker.address.city(), // Gera uma cidade fictícia
      state: faker.address.stateAbbr(), // Gera o estado fictício (abreviação)
      zipCode: faker.address.zipCode(), // Gera um código postal fictício
      phoneNumber: faker.phone.phoneNumber(), // Gera um número de telefone fictício
    };

    fakerUsers.push(fakeUser);
  }

  const dadosJSON = JSON.stringify(fakerUsers, null, 2);

  // Salva a string JSON em um arquivo
  fs.writeFile(data_infor_new, dadosJSON, "utf8", (err) => {
    if (err) {
      console.error("Erro ao salvar o arquivo JSON:", err);
    } else {
      console.log(`Arquivo JSON "${data_infor_new}" salvo com sucesso.`);
    }
  });

  console.log(fakerUsers);
})();
