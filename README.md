# Front End - Challenge

<h2> 💻 Sobre o projeto</h2>
<p>O projeto tem como objetivo construir uma aplicação usando ReactJS que permite buscar o perfil de usuários na API pública do GitHub e mostrar seus dados em uma página de perfil. 
<br>
<br>
A aplicação utiliza a <b>API do GitHub</b> para ter informações sobre os usuários, como nome de usuário, o nome, biografia, localização, número de seguidores, de quantas pessoas o usuário está seguindo e a quantidade de estrelas. 
<br>
<br>
O objetivo é <b>fornecer uma interface simples</b> para poder pesquisar<b> perfis de desenvolvedores do GitHub</b>.
</p>

<h2>📱 Tecnologias utilizadas no projeto</h2>

<div align="center">
✅ React Vite | ✅ React Router | ✅ Axios | ✅ Styled-Components | ✅ Testes com Jest | ✅ NPM |✅ Vercel
</div>
<br>
<div align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E">
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
</div>

<h2> 📃 Funcionalidades</h2>
<h3> ▪️ Página Home:</h3>
<p>A página inicial apresenta um título "Search Devs", e um campo para que o usuário possa pesquisar ppr um nome de usuário do GitHub e um botão.</p>

<h3> ▪️ Página Profile:</h3>
<p>Quando clica no botão, a aplicação faz uma chamada à <b>API do GitHub</b> e exibe as informações do usuário, como nome, nome de usuário, biografia, quantidade de seguidores, quantidade de pessoas que o usuário está seguindo, quantidade de estrelas e e algumas outras informações, como site pessoal, localidade, empresa e twitter. A página também tem um botão "Voltar" que leva o usuário de volta à página inicial (Home).</p>
<p>E a página apresenta uma <b>seção de repositórios do usuário</b>, exibindo uma lista ordenada de seus repositórios com base na quantidade de estrelas, apresentando o nome do repositório como um link, um resumo do repositório, a quantidade de estrelas que ele tem e a data da última atualização.</p>

<p>O site é <b>responsivo</b>, oferecendo uma <b>experiência consistente e de fácil utilização</b> tanto em desktops quanto em dispositivos móveis, como celulares e tablets.
</p>

<h2>💻Pré-requisitos</h2>
<p align="center">Precisamos ter na máquina esses dois (geralmente vem juntos na instalação) pra gerenciar as dependências desse projeto:</p>
<div align="center">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
</div>

<p align="center">Ou pode verificar se já tem na sua máquina:</p>
<div align="center">
<code>node -v</code>
<code>npm -v</code>
</div>

<h2>🟩 Como executar esse projeto</h2>
<li>Clone esse repositório em seu computador:</li>
<code>git clone https://github.com/seu-nome-de-usuario/fronteend-challenge.git
</code>
<br>
<li>Vá até a pasta do projeto usando o terminal:</li>
<code>cd fronteend-challenge</code>
<br>
<br>
<li>Instale as dependências do projeto:</li>
<code>npm install</code>
<br><br>
<li>Inicie o servidor de desenvolvimento com o comando abaixo:</li>
<code>npm run dev</code>

<h2>✨ Motivação de escolha das libs e framework</h2>
Optei por utilizar o <b>React Vite</b> para facilitar o processo de desenvolvimento e construção da aplicação.
<br>
<br>
Usei <b>React Router</b> para gerenciar a navegação entre as diferentes páginas da aplicação
<br>
<br>
Usei <b>Styled Components</b> para a estilização dos componentes. O Styled Components nos permite criar estilos reutilizáveis e modularizados, o que facilita a manutenção do código e ajuda a garantir a consistência visual em toda a aplicação.
<br>
<br>
E para consumir a <b>API do GitHub</b>, utilizei o <b>Axios</b>, que simplifica as chamadas de API e permite lidar com erros de forma eficiente. Além disso, usei a biblioteca Moment.js para formatar a data de criação dos repositórios exibidos na aplicação.
<br>
<br>
Também usei o <b>Jest</b> para fazer testes da aplicação, garantindo a qualidade e estabilidade do código.

<h2>🏢 Estrutura do Projeto</h2>

🔹 <b>src/assets/</b>: Nessa pasta temos as imagens que estão sendo usadas no projeto.

🔹 <b>src/components/</b>: Nessa pasta tem todos os componentes utilizados na aplicação.

🔹 <b>src/components/RepositoryInfos/</b>: Esse componente é responsável por mostrar as informações dos repositórios do usuário do GitHub.

🔹 <b>src/components/ProfileInfos/</b>: Esse componente é responsável por mostrar as informações de perfil do usuário do GitHub.

🔹 <b>src/pages/</b>: Nessa pasta temos as páginas da aplicação. Cada página é organizada em sua própria pasta.

🔹 <b>src/pages/Home/</b>: Nessa página tem a tela inicial da aplicação, que permite buscar por usuários do GitHub.

🔹 <b>src/pages/Profile/</b>: Nessa página mostra as informações de um usuário específico do GitHub e seus repositórios.

🔹<b>src/tests/</b>: Nessa pasta contém os testes para cada componente da aplicação.

🔹 <b>src/GlobalStyled.jsx</b>: Nesse arquivo contém os estilos globais da aplicação.

Essa estrutura foi criada para facilitar a manutenção e organização do código. Cada componente e página é separado em sua própria pasta, com seus próprios arquivos de estilo.

<h2>💻 Deploy do projeto</h2>
https://fronteend-challenge-black.vercel.app/

<h2>🟦 Links da API e Documentação</h2>
🔹 API de busca de usuários do GitHub: https://api.github.com/users/username
<br>
🔹 API de busca de repositórios do usuário pesquisado: https://api.github.com/users/username/repos
<br>
🔹Documentação oficial do GitHub: https://docs.github.com/en/rest

<h2>Imagens do projeto</h2>
<img src="https://user-images.githubusercontent.com/100172961/231047453-c27b5f18-2b28-4add-9938-fec576abf297.png">
<img src="https://user-images.githubusercontent.com/100172961/231047971-6d9a0040-00cb-48a8-b062-e0591f486a82.png">
<img src="https://user-images.githubusercontent.com/100172961/231048016-a8aa6405-ae8d-4b09-a271-3c71a5f44c72.png">

<h2>📱 Contato</h2>
Caso tenha alguma dúvida ou queira entrar em contato comigo, sinta-se à vontade para me enviar um e-mail ou uma mensagem nas redes sociais: <br>
Instagram: https://www.instagram.com/medeiros_eo/
<br>
LinkedIn: https://www.linkedin.com/in/endioliveira/
<br>
E-mail: eomedeiros21@gmail.com
