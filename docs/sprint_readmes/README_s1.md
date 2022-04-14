
  <h1 align="center">:inbox_tray: FolConn :iphone::eagle:</h1>
  <p align="center">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
    <img src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37"/>
  </p>
  <p align="justify">A empresa parceira fabrica diversos veículos, que são utilizados ao redor do mundo todo por todos os seus clientes. Algumas vezes, eles são fabricados e possuem algum problema e os compradores precisam ser informados para que não ocorra risco de vida ao utilizá-los. Atualmente a empresa parceira não possui nenhuma plataforma que centraliza todas as informações e notifica os usuários sobre recalls e avisos sobre possíveis avarias nos veículos fabricados. Sendo assim, nós, da equipe ClaraDB, fomos desafiados a desenvolver um aplicativo que comunica, através de notificações, os usuário sobre atualizações de possíveis transtornos nos veículos e automatiza a visualização do novo aviso.</p>
  
  <h2 align="center">:rainbow::spiral_calendar: Primeira Entrega :stars:</h2>
  <h3>:question: O que fizemos?</h3>
  <p align="justify">Na sprint 1 decidimos iniciar o projeto a partir do acesso do usuário ao aplicativo, em que ele é cadastrado externamento e só o trazemos para o nosso banco, e a pesquisa das FOLs a partir do equipamento do usuário logado, status da FOL e palavras-chave da FOL. Ainda não é possível clicar nos resultados para visualizar o arquivo em PDF do documento selecionado.
  </p>
  <p align="center">
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/media/imgs/user_stories/s1.png" width="348px"/>
  </p>
  <h3>:grey_question: Por quê?</h3>
  <p align="justify">Desenvolvemos primeiro essas duas funcionalidades porque elas são essenciais para o funcionamento do sistema. O acesso a uma FOL não é público. Somente os usuários que possuem o equipamento podem ver as FOLs dele, portanto, é prioritário que desde o início do projeto já haja esse filtro. A partir da filtragem das FOLs por usuário, sabemos que o ideal é visualizar o arquivo da FOL, o que em breve estará disponível.</p>
  
  <h2>:running_woman: FolConn em funcionamento :computer::computer_mouse:</h2>
  <p align="center">
    <img/>
  </p>
  <p align="center">Caso queira executar nosso projeto, clique <a href="https://github.com/barbaraport/api-claradb/tree/main/docs/running_project">aqui</a>.</p>

  <h2 align="center">:bookmark_tabs: <i>Mockups</i> :memo:</h3>
  <p align="justify">Nessa entrega planejamos as imagens abaixo para a interface do aplicativo. A visualização da FOL no documento ainda é uma funcionalidade a ser desenvolvida, mas a incluímos no planejamento para termos uma visão total de como o fluxo de navegação no aplicativo ficará.</p>
<p align="justify">O usuário entrará primeiramente na tela de login e se ele estiver cadastrado, pode acessar o app. Da página home é possível acessar o menu de forma a navegar para as outras páginas do app. Na página de pesquisa das FOLs, ao buscar algum documento de acordo com o filtro escolhido, uma caixa se abrirá com os resultados. Futuramente ao clicar em um dos resultados será possível visualizar o documento correspondente em PDF.</p>
  <p align="center">
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/app/1_login.png" width="264"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/app/2_home.png" width="264"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/app/3_menu.png" width="264"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/app/4_filter_fols.png" width="618"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/app/5_see_fols.png" width="618"/>
  </p>
  
  <h2 align="center">Banco de Dados :open_file_folder:</h2>
  <p align="justify">Utilizamos o MongoDB como o nosso banco de dados. Ele é um SGBD NoSQL e muito utilizado para acesso rápido aos dados. Como o aplicativo é <i>read-only</i>, trará benefícios e não há necessidade de um banco normalizado, que é mais custoso e pode demorar mais para obter os dados desejados.</p>
<h3><i>Users Collection</i> 👩‍👦‍👦</h3>


```javascript
{
     "_id": ObjectId,
     "Username": String,
     "Login": String,
     "Password": Binary,
     "Equipment": Array
}
```
<h3><i>:file_cabinet: Documents Collection :card_index:</i></h3>


```javascript
{
     "_id": ObjectId,
     "Title": String,
     "Equipment": String,
     "Applicability": Int32,
     "Issue description": String,
     "Category": String,
     "Status": String,
     "Issue date": Date,
     "Revision number": Double,
     "Revision date": Date,
     "Remarks": Int32,
     "Keywords": Array
}
```
<h3><i>:gear:	DatabaseStatus Collection</i></h3>


```javascript
{
     "_id": ObjectId ,
     "statusName": String,
     "statusValue": Boolean
}
```


  <h2 align="center"><i>Burndown</i> :date::chart_with_downwards_trend:</h3>
  <p align="justify">Durante a nossa sprint desenvolvemos as funcionalidades que são essenciais no sistema. Tivemos que iniciar as bases tanto do back-end quando do front-end do aplicativo, o que tomou uma parte considerável do tempo. Muitas coisas que são invisíveis ou simples para o usuário podem ser complexas. As duas funcionalidades planejadas para serem entregues foram concluídas e de agora em diante o essencial é melhorá-las e implementar novos requisitos.</p>
  <p align="center">
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/burndown/Burndown%20Sprint%201.png"/>
  </p>
  
  <h2>:girl: Integrantes da equipe :boy:</h2>
  <ul>
    <li><a href="https://www.linkedin.com/in/rafael-furtado-613a9712a/">Rafael Furtado Rodrigues dos Santos</a> (<i>Scrum Master</i>)</li>
    <li><a href="https://www.linkedin.com/in/b%C3%A1rbara-port-402158198/">Bárbara dos Santos Port</a> (<i>Product Owner</i>)</li>
    <li><a href="https://www.linkedin.com/in/ana-clara-godoy-2973381b2/">Ana Clara Ferreira de Godoy</a> (<i>Software Developer</i>)</li>
    <li><a href="https://www.linkedin.com/in/anna-yukimi-yamada-6ba23b149/">Anna Yukimi Yamada</a> (<i>Software Developer</i>)</li>
    <li><a href="https://www.linkedin.com/in/carolina-margiotti-703897193/">Carolina Margiotti de Abreu</a> (<i>Software Developer</i>)</li>
    <li><a href="https://www.linkedin.com/in/daniel-vargas-8b806a184/">Daniel Vargas Ribeiro</a> (<i>Software Developer</i>)</li>
    <li><a href="https://www.linkedin.com/in/levi-motta-5001a2173/">Levi Alberto Motta Santos</a> (<i>Software Developer</i>)</li>
  </ul>
  
  <p align="center">
    <img src="http://ForTheBadge.com/images/badges/built-with-love.svg"/>
  </p>
