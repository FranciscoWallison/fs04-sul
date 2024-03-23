## Iniciando reactJS

```
Ao discutir o JSX em relação ao ReactJS, é fundamental entender que o JSX não é uma linguagem separada, mas uma extensão da 
sintaxe do JavaScript. JSX, ou JavaScript XML, é uma extensão de sintaxe que permite escrever marcação XML/HTML diretamente no 
código JavaScript. No contexto do React, JSX é usado para descrever a interface do usuário, permitindo a criação de componentes
de maneira mais intuitiva e legível.

A principal razão para a existência do JSX no React é oferecer uma forma de escrever código que se assemelhe mais à estrutura
da interface do usuário, combinando elementos de marcação com lógica JavaScript. Isso facilita a construção e manutenção de
componentes, pois os desenvolvedores podem escrever código mais semelhante ao HTML, tornando-o mais compreensível e menos
propenso a erros.
```


## Hooks
````
    Eles permitem que você use estados, efeitos, contexto e outras funcionalidades do 
 React em componentes funcionais, antes disponíveis apenas em componentes de classe.
 Os hooks são funções que permitem "ligar-se" a recursos do React em componentes funcionais,
 fornecendo um modo mais simples e eficaz de gerenciar o estado e o ciclo de vida dos componentes.
````

## State e Props:
#### State:
```
O estado (state) em React refere-se aos dados internos de um componente. É um objeto que representa propriedades do componente que 
podem mudar ao longo do tempo devido a interações do usuário, eventos ou outras ações. Cada componente React pode ter seu próprio 
estado interno.

Para definir o estado de um componente, usa-se a função setState, que é fornecida pelo React. Quando o estado é atualizado com 
setState, o componente é re-renderizado para refletir essas mudanças. O estado é inicializado no método constructor do componente 
e pode ser atualizado por meio do setState.
```
#### Props:
```
Props, abreviação de propriedades, são a principal maneira de passar dados de um componente pai para um componente filho em React.
As props são somente leitura e ajudam a tornar os componentes mais reutilizáveis, permitindo a passagem de dados e configurações.

As props são passadas para um componente como atributos no momento em que são utilizados. Esses valores podem ser acessados
pelo componente filho através do objeto props.
```


### Adicionando Bootstrap no projeto
```` 
npm install bootstrap
```` 

### Exemplo no index.js

```` 
...
import './index.css'; // Seu arquivo CSS local, se houver
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap

....

```` 
Explicando:
Codificação (Encoding)
````
Header (Cabeçalho): O cabeçalho do JWT contém metadados sobre o tipo do token e o algoritmo de hashing usado para assinar o token. 
Ele é codificado para JSON e então convertido para Base64URL.

Payload (Corpo): O payload contém os dados que você deseja transmitir, como informações sobre o usuário ou autorização. 
Ele também é codificado para JSON e convertido para Base64URL.

Assinatura (Signature): A assinatura é criada combinando o cabeçalho codificado, o payload codificado, e uma chave 
secreta (ou chave pública, se estiver usando criptografia assimétrica), usando um algoritmo de hash, como HMACSHA256 
ou RSA. A assinatura fornece integridade aos dados, garantindo que eles não tenham sido alterados durante a transmissão.
```` 
Decodificação (Decoding)
````
Validação: O token JWT é dividido em suas partes: cabeçalho, payload e assinatura. Em seguida, 
o algoritmo de assinatura é usado para verificar se a assinatura é válida, garantindo assim a integridade dos dados.

Base64 Decode: O cabeçalho e o payload, que foram convertidos para Base64URL durante a codificação, 
são decodificados de volta para JSON.

Utilização: Após a decodificação e validação, o conteúdo do payload pode ser utilizado pela aplicação conforme necessário.
````
Exemplo de um JWT
````
Parte 1 (Header): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Parte 2 (Payload): eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ
Parte 3 (Signature): SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
````

exemplo de javascript: 
```js
const jwt = require('jsonwebtoken');

// Definindo um segredo para assinar o token (deve ser mantido em segredo na produção)
const segredo = 'meuSegredoSuperSecreto';

// Dados do usuário para incluir no token
const usuario = {
  id: 1,
  nome: 'João da Silva',
  email: 'joao@example.com'
};

// Criar um token JWT
const token = jwt.sign(usuario, segredo, { expiresIn: '1h' });

console.log('Token JWT:', token);

// Verificar o token JWT
jwt.verify(token, segredo, (err, decoded) => {
  if (err) {
    console.error('Erro ao verificar o token:', err);
  } else {
    console.log('Token decodificado:', decoded);
  }
});
````

Exemplo de token :
```js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authenticateJWT = require('./middleware/authenticateJWT');

const app = express();
app.use(express.json());

const produtosRouter = require('./routes/produtos');
const usuariosRouter = require('./routes/usuarios');
const pedidosRouter = require('./routes/pedidos');

const users = [
  {
    username: 'user1',
    password: '$2b$10$EL0V5xJ/hqj/63SwtePth.2msBqNJ57MRr9J3yIzXPKB0ud3xJJJe', // Hashed password of 'password1'
  },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const accessToken = jwt.sign({ username: user.username }, 'secret_key');
    res.json({ accessToken });
  });
});

// Middleware para proteger os endpoints
app.use(authenticateJWT);

// Roteadores protegidos
app.use("/produtos", produtosRouter);
app.use("/usuarios", usuariosRouter);
app.use("/pedidos", pedidosRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

exemplo de refresh 

```js
const jwt = require('jsonwebtoken');

// Definindo segredos para assinar os tokens (mantenha-os em segredo na produção)
const segredoTokenAcesso = 'segredoTokenAcesso';
const segredoRefreshToken = 'segredoRefreshToken';

// Dados do usuário para incluir no token de acesso
const usuario = {
  id: 1,
  nome: 'João da Silva',
  email: 'joao@example.com'
};

// Função para gerar um token de acesso
function gerarTokenAcesso(usuario) {
  return jwt.sign(usuario, segredoTokenAcesso, { expiresIn: '15m' });
}

// Função para gerar um refresh token
function gerarRefreshToken(usuario) {
  return jwt.sign(usuario, segredoRefreshToken, { expiresIn: '7d' });
}

// Simulação de login bem-sucedido
function fazerLogin(req, res) {
  const accessToken = gerarTokenAcesso(usuario);
  const refreshToken = gerarRefreshToken(usuario);
  res.json({ accessToken, refreshToken });
}

// Endpoint para renovar o token de acesso usando o refresh token
function renovarToken(req, res) {
  const { refreshToken } = req.body;

  jwt.verify(refreshToken, segredoRefreshToken, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    const accessToken = gerarTokenAcesso(decoded);
    res.json({ accessToken });
  });
}

// Exemplo de uso

// Simulação de um novo login
fazerLogin({}, {
  json: (data) => {
    console.log('Token de Acesso:', data.accessToken);
    console.log('Refresh Token:', data.refreshToken);

    // Simulação de solicitação para renovar o token de acesso
    renovarToken({ body: { refreshToken: data.refreshToken } }, {
      json: (data) => {
        console.log('Novo Token de Acesso:', data.accessToken);
      },
      sendStatus: (status) => {
        console.log('Erro ao renovar o token:', status);
      }
    });
  }
});
```



