
  <h1 align="center">:inbox_tray: FolConn :iphone::eagle:</h1>
  <p align="center">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  </p>
  <p align="justify">A empresa parceira fabrica diversos veículos, que são utilizados ao redor do mundo todo por todos os seus clientes. Algumas vezes, eles são fabricados e possuem algum problema, portanto, os compradores precisam ser informados para que não ocorra risco de vida ao utilizá-los. Atualmente a empresa parceira não possui nenhuma plataforma que centraliza todas as informações e notifica os usuários sobre recalls e avisos sobre possíveis avarias nos veículos fabricados. Sendo assim, nós, da equipe ClaraDB, fomos desafiados a desenvolver um aplicativo que comunica, através de notificações, os usuário sobre atualizações de possíveis transtornos nos veículos e automatiza a visualização do novo aviso.</p>
  
  <h2 align="center">:rainbow::spiral_calendar: Segunda Entrega :stars:</h2>
  <h3>:question: O que fizemos?</h3>
  <p align="justify">Na sprint 2 decidimos realizar melhorias no <i>app</i> e, também, dar início ao desenvolvimento do sistema <i>web</i>. Nosso aplicativo conta com o cadastro do acesso a um documento e com o cadastro de acessos ao app. O usuário deve aceitar os termos de uso para que seu nome possa ser exibido juntamente aos dados, no FolConn <i>web</i>. No FolConn <i>web</i> é possível visualizar todos os acessos realizados pelos usuários, bem como a localização do acesso. Da mesma forma, é possível visualizar os acessos às FOLs e de onde elas foram acessadas. Os dados são exibidos em uma lista, de forma decrescente. Sendo assim, os países que aparecem primeiro são os mais acessados. Equitativamente, as FOLs mais acessadas também são exibidas no topo.
  </p>
  <p align="center">
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/media/imgs/user_stories/s2.png" width="348px"/>
  </p>
  <h3>:grey_question: Por quê?</h3>
  <p align="justify">Como a empresa parceira preza por ter um bom relacionamento com os seus clientes, é necessário que eles possam ter acesso a dados estatísticos para conhecer melhors seus clientes e para ajudá-los de forma efetiva. Consequentemente os dados são registrados a partir da autorização do usuário e eles são exibidos no FolConn <i>web</i>.</p>
  
  <h2>:running_woman: FolConn em funcionamento :computer::computer_mouse:</h2>
  <p align="center">
    <img src="https://github.com/barbaraport/api-claradb/blob/main/docs/media/gifs/Sprint%201%20-%20FOL%20Filters.gif"/>
  </p>
  <p align="center">Caso queira executar nosso projeto, clique <a href="https://github.com/barbaraport/api-claradb/tree/main/docs/running_project">aqui</a>.</p>

  <h2 align="center">:bookmark_tabs: <i>Mockups</i> :memo:</h3>
  <p align="justify">Nessa entrega planejamos a interface do FolConn <i>web</i> e o resultado se encontra nas imagens abaixo. </p>
<p align="justify">O usuário entrará primeiramente na tela de login e se ele estiver cadastrado, pode acessar o app. Da página home é possível acessar o menu de forma a navegar para as outras páginas do app. Na página de pesquisa das FOLs, ao buscar algum documento de acordo com o filtro escolhido, uma caixa se abrirá com os resultados. Ao selecionar uma opção, caso o documento selecionado exista na nossa base de dados, o PDF é exibido diretamente na página inicial do documento selecionado.</p>
<p align="justify">Ao logar no FolConn <i>web</i> é possível escolher os acessos ao app e, também, o acesso às FOLs. Ambos apresentam a localização do usuário, data, hora, e caso ele esteja de acordo, o seu nome.</p>
  <p align="center">
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/web/login_admin.png" width="700"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/web/landing_page.png" width="700"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/web/user_activity.png" width="700"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/web/user_fol.png" width="700"/>
  </p>
  
  <h2 align="center">Banco de Dados :open_file_folder:</h2>
  <p align="justify">Utilizamos o MongoDB como o nosso banco de dados. Ele é um SGBD NoSQL e muito utilizado para acesso rápido aos dados. Como o aplicativo é <i>read-only</i>, trará benefícios e não há necessidade de um banco normalizado, que é mais custoso e pode demorar mais para obter os dados desejados.</p>
<h3><i>AdminUsers Collection</i> 👩‍👦‍👦</h3>


```javascript
{
     "_id": ObjectId,
     "Name": String,
     "Login": String,
     "Password": Binary,
}
```
<h3><i>:gear:	DatabaseStatus Collection</i></h3>


```javascript
{
     "_id": ObjectId,
     "statusName": String,
     "statusValue": Boolean
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
<h3><i>:chart: FOLAccessAttempts Collection :card_index:</i></h3>


```javascript
{
     "_id": ObjectId,
     "Title": String,
     "UserId": ObjectId,
     "Username": String,
     "FOLTitle": String,
     "Date": Date,
     "Geolocation": {
         "Suburb": String,
         "State": String,
         "Country": String,
         "City": String
     }
}
```
<h3><i>:file_cabinet: FOLsFiles Collection</i></h3>


```javascript
{
     "_id": ObjectId,
     "Equipment": String,
     "FileName": String
}
```
<h3><i>:chart: LoginAttempts Collection :card_index:</i></h3>


```javascript
{
     "_id": ObjectId,
     "UserId": ObjectId,
     "Username": String,
     "Date": Date,
     "Geolocation": {
         "Suburb": String,
         "State": String,
         "Country": String,
         "City": String
     }
}
```
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


  <h2 align="center"><i>Burndown</i> :date::chart_with_downwards_trend:</h3>
                    <p align="justify">Durante essa sprint desenvolvemos a parte essencial do FolConn <i>web</i>. Sendo assim, as funcionalidades básicas de ambos os sistemas já se encontram com uma ótima usabilidade. Tivemos pouco tempo hábil durante a sprint, porém trabalhamos em equipe de maneira a conseguir resolver nossos problemas e implementar todas as funcionalidades, da melhor forma, com sucesso, pois nos preocupamos com a satisfação do nosso cliente.</p>
  <p align="center">
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/burndown/Burndown%20Sprint%202.png"/>
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
