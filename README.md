# Learning_BOT_Mateus

##Bot (Selenium + node.js) for Seredempia.herokuapp.com

Este projeto tem como objetivo, a partir da criação de um bot que ira acessar e utilizar o site 'Seredempia.herokuapp.com' (desenvolvido por mim), adquirir conhecimentos relacionados ao desenvolvimento de Bots, o projeto foi desenvolvido utilizando a linguagem Javascript e utilizando as ferramentas:

    • Node.js 4.5.0;

    • NPM 2.15.9;

    • Selenium (versão para node) 3.0.0-beta-3;

    • Chrome WebDriver 2.24;

    • Atom 1.12.0.

Com o desenvolvimento desta aplicação foi criado um arquivo "index.js" que, utilizando o node_module selenium-webdriver junto ao chromedriver:

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
