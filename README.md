# Seredempia

## Bot (Selenium + node.js) for Seredempia.herokuapp.com

Este projeto tem como objetivo, a partir da criação de um bot que ira acessar e utilizar o site 'Seredempia.herokuapp.com' (desenvolvido por mim), fazer o teste das funcionalidades de tal projeto, o projeto foi desenvolvido utilizando a linguagem Javascript.

## Ferramentas

* [Node.js 4.5.0](https://nodejs.org/en/);

* [NPM 2.15.9](https://www.npmjs.com/);

* [Selenium (versão para node) 3.0.0-beta-3](http://docs.seleniumhq.org/);

* [Chrome WebDriver 2.24](https://sites.google.com/a/chromium.org/chromedriver/);

* [Atom 1.12.0](https://atom.io/).

## Instalação

### Pré-Instalação

Ferramentas necessarias para o funcionamento do projeto. Para instalar o Node.js e o Chrome Driver é necessario entrar em seus sites e fazer o download dos arquivos. Também é necessário inserir a pasta onde esta presente o arquivo do chrome driver na variavel de sistema ```PATH``` do sistema operacional utilizado:

  * [Node.js](https://nodejs.org/en/);
  * [Chrome Driver](https://sites.google.com/a/chromium.org/chromedriver/).

### Instalações de dependencias

Dependencias utilizadas pelo projeto. o comando a seguir instala as dependencias descritas dentro do arquivo ```package.json```:

* ```npm install```;

## Inicialização

Para inicializar o projeto basta entrar na pasta do projeto a partir do console do sistema operacional e digitar o seguinte comando:

```bash
npm start
```

## Funcionamento

Com o desenvolvimento desta aplicação foi criado um arquivo ```index.js``` e ```navigatorService.js``` que, utilizando o node_module selenium-webdriver junto ao chromedriver:

1. Entra em #/Estudante;
2. Digita um cpf;
3. Clica no botão Solicitar;
4. Faz o logIn em uma Escola (inserindo usuário e senha);
5. Seleciona o estudante do cpf expecificado, caso exista;
6. Clica no botão confirmar;
7. Faz o logOut;
8. Faz o logIn em um transporte (inserindo usuário e senha);
9. Seleciona o estudante do cpf expecificado, caso exista;
10. Clica no botão confirmar;
11. Faz o logOut;
12. Fecha o Driver.
