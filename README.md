# Frontend da Aplicação

Este repositório contém o código do frontend de uma aplicação criada com o React.

## Estrutura de Arquivos

- `node_modules`: Pasta que contém todos os pacotes do npm que o projeto depende.
- `public`: Pasta que contém os arquivos estáticos como HTML e ícones.
  - `favicon.ico`: Ícone da guia do navegador.
  - `index.html`: Arquivo HTML raiz que é servido ao visitar a aplicação.
- `src`: Pasta que contém os arquivos fonte JavaScript e CSS.
  - `components`: Diretório para os componentes React.
  - `resources`: Diretório para outros recursos estáticos, como imagens ou arquivos compartilhados.
  - `App.js`: Componente raiz da aplicação React.
  - `index.js`: Ponto de entrada JavaScript que renderiza o componente `App` no DOM.
  - `logo.svg`: Um arquivo de imagem SVG usado no template padrão do React.

- `package.json`: Arquivo que lista as dependências do projeto e scripts disponíveis.

## Dependências

- `react`: Biblioteca para construir interfaces de usuário.
- `react-dom`: Pacote que permite ao React interagir com o DOM.
- `react-scripts`: Conjunto de scripts e configurações usados para iniciar, construir e testar aplicações React.

## Scripts Disponíveis

No diretório do projeto, você pode rodar:

- **Iniciar o projeto**:
  ```bash
  npm start

Este comando inicia o servidor de desenvolvimento. A aplicação será aberta automaticamente no navegador padrão. O servidor de desenvolvimento oferece recarga ao vivo, então qualquer alteração nos arquivos do projeto será imediatamente refletida no navegador sem a necessidade de recarregar a página manualmente.

- **Construir o projeto para produção**:
  ```bash
  npm run build

  Compila a aplicação para produção na pasta build. Otimiza o build para o melhor desempenho: os arquivos são minificados e os nomes dos arquivos incluem os hashes.
  
# Estrutura do Backend

Este repositório contém o código do backend de uma aplicação Node.js que utiliza o framework Express.js e o ORM Sequelize para a interação com o banco de dados MySQL.

## Estrutura de Arquivos

- `src`: Pasta fonte onde o código principal da aplicação está localizado.
  - `config`: Contém arquivos de configuração para diferentes ambientes (desenvolvimento, teste, produção).
  - `controllers`: Mantém as classes controladoras responsáveis por lidar com as solicitações HTTP, executando operações CRUD através dos serviços.
  - `migrations`: Diretório para os arquivos de migração do Sequelize, que gerenciam as alterações no esquema do banco de dados.
  - `models`: Contém os modelos do Sequelize que representam as tabelas do banco de dados na aplicação.
  - `routes`: Define as rotas HTTP que mapeiam para os métodos dos controladores.
  - `seeders`: Diretório para os arquivos de seed do Sequelize que populam o banco de dados com dados iniciais.
  - `services`: Camada de serviço que contém a lógica de negócios e interage com os modelos para consultar o banco de dados.

- `.eslintrc.json`: Configurações do ESLint para a padronização de código.
- `.sequelizerc`: Configurações do Sequelize CLI.
- `package.json` e `package-lock.json`: Contêm as dependências do projeto e outras informações.
- `server.js`: Arquivo de entrada da aplicação que configura o servidor Express.

## Configuração do Banco de Dados

O arquivo `config.json` localizado em `src/config` define as configurações do banco de dados para diferentes ambientes. Ele configura o usuário, senha, banco de dados, host e dialeto para o Sequelize.

## Controladores

Os controladores são responsáveis por manipular as solicitações e respostas HTTP. Eles utilizam os serviços para executar operações no banco de dados e enviar a resposta apropriada ao cliente.

Exemplo de um método do controlador:

```
async pegaTodos(req, res) {
  try {
    const registros = await this.entidadeService.pegaTodosOsRegistros();
    return res.status(200).json(registros);
  } catch (erro) {
    // Tratamento do erro
  }
}
```

## Serviços

Os serviços interagem com os modelos do Sequelize para realizar operações no banco de dados. Eles são chamados pelos controladores e contêm a lógica de negócios da aplicação.

```
class Services {
  // ...
  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }
  // ...
}

## Rotas

As rotas são definidas para especificar como a aplicação deve responder a uma requisição a um determinado endpoint, que é uma URI (ou caminho) e um método HTTP específico (GET, POST, etc.):

  const express = require('express');
  const MeuController = require('../controllers/meuController');
  const router = express.Router();
  
  router.get('/entidade', MeuController.pegaTodos);
  router.get('/entidade/:id', MeuController.pegaUmPorId);
  router.post('/entidade', MeuController.criaNovo);
  router.put('/entidade/:id', MeuController.atualiza);
  router.delete('/entidade/:id', MeuController.exclui);
  
  module.exports = router;
```

## Executando o Projeto

Para colocar o servidor em funcionamento localmente, siga os passos abaixo:

1. **Instalação de Dependências**:
Utilize o comando abaixo para instalar todas as dependências necessárias listadas no arquivo `package.json`.

```cli
npm install
```

2. **Configuração do Banco de Dados**:
Configure seu banco de dados MySQL de acordo com as configurações encontradas em `src/config/config.json`. Certifique-se de que as credenciais e o nome do banco de dados estejam corretos para os ambientes de desenvolvimento, teste e produção.

3. **Migrações do Banco de Dados**:
Execute as migrações para criar as tabelas no banco de dados usando o Sequelize CLI com o comando:

```cli
npx sequelize-cli db:migrate
```

4. **Populando o Banco de Dados** (opcional):
Se necessário, você pode popular o banco de dados com dados iniciais utilizando o comando:

```cli
npx sequelize-cli db:seed:all
```

5. **Executando o Servidor**:
Inicie o servidor em modo de desenvolvimento com o seguinte comando:

```cli
npm run dev
```

Isso iniciará o servidor usando `nodemon`, que irá automaticamente reiniciar o servidor sempre que houver alterações no código.

6. **Testando a API**:
Após o servidor estar em execução, você pode testar as rotas da API utilizando um cliente de API como Postman ou simplesmente acessando-as através do navegador, dependendo do tipo de requisição (GET, POST, etc.).

Tenha certeza de verificar os logs no console para qualquer erro e mensagens de sucesso indicando que o servidor está rodando corretamente.
