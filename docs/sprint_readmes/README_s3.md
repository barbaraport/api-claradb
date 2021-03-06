
  <h1 align="center">:inbox_tray: FolConn :iphone::eagle:</h1>
  <p align="center">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  </p>
  <p align="justify">A empresa parceira fabrica diversos veículos, que são utilizados ao redor do mundo todo por todos os seus clientes. Algumas vezes, eles são fabricados e possuem algum problema, portanto, os compradores precisam ser informados para que não ocorra risco de vida ao utilizá-los. Atualmente a empresa parceira não possui nenhuma plataforma que centraliza todas as informações e notifica os usuários sobre recalls e avisos sobre possíveis avarias nos veículos fabricados. Sendo assim, nós, da equipe ClaraDB, fomos desafiados a desenvolver um aplicativo que comunica, através de notificações, os usuário sobre atualizações de possíveis transtornos nos veículos e automatiza a visualização do novo aviso.</p>
  
  <h2 align="center">:rainbow::spiral_calendar: Terceira Entrega :stars:</h2>
  <h3>:question: O que fizemos?</h3>
  <p align="justify">A <i>sprint</i> 3 representa a nossa última entrega, portanto, devemos entregar ao cliente tudo o que foi definido anteriormente. As últimas funcionalidades desejadas pelo cliente eram: o envio de notificações <i>push</i> caso um novo documento fosse criado, editado, excluído etc. e a visualização das FOLs que cada usuário acessou. Além disso, fizemos um ajuste na pesquisa das FOLs conforme o pedido do nosso cliente.
  </p>
   <p align="center">
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/media/imgs/user_stories/s3.png" width="348px"/>
  </p>
  <h4>:safety_pin: Segurança da Informação :desktop_computer::warning:</h4>
  <p align="justify">Desenvolvemos, também, durante essa <i>sprint</i> um requisito para a validação técnica na disciplina de Segurança da Informação. 
  <p align="justify">Com uma base de dados não relacional, MongoDB, são registradas as informações do usuário, tais como senha, veículos, localização, horário de login, status do termo de uso e acesso aos documentos FOL da plataforma. O uso dessas informações é restrito à autenticação do usuário no sistema e análises estatísticas. Todos os detalhes relevantes ao cliente sobre esse tratamento são descritos na página de Termos de Uso que é apresentado automaticamente ao realizar o primeiro login após uma nova versão ser publicada. Esse documento pode ser facilmente acessado a qualquer momento dentro da plataforma.
</p>
<p align="justify">No presente momento, os Termos de Uso da FolConn estão em conformidade com a Lei Geral de Proteção de Dados (LGPD). Especificando a forma de tratamento dos dados, há três opções que podem ser assinaladas: O usuário permite ser contactado via e-mails; ser contactado via número de celular; afirmar ter lido e concordado com os termos descritos no documento. No banco de dados, pode-se filtrar por opção assinalada, o que trará como resultado, todos os usuários que concordaram com esta.</p>
<p align="justify">O único perfil com acesso aos dados do cliente é o administrador. Caso o usuário não aceite os termos de uso, suas informações não constarão nas estatísticas. No entanto, nada impede que o usuário retorne à página dos Termos de Uso e opte por assinalar outra opção. A partir do momento da alteração, o usuário passa a constar em cada lista de pessoas que aceitaram a(s) mesma(s) opção(ões).</p>

  <h3>:grey_question: Por quê?</h3>
  <p align="justify">O envio das notificações e o relatório de documentos acessados pelos usuários eram as últimas funcionalidades faltantes para a conclusão do desenvolvimento. Sendo assim, iniciamos tais atividades e conseguimos finalizá-las tranquilamente durante o período de desenvolvimento. Todos os requisitos foram implementados.</p>
  
  <h2>:running_woman: FolConn em funcionamento :computer::computer_mouse:</h2>
  <p align="center">
    <img src="https://github.com/barbaraport/api-claradb/blob/main/docs/media/gifs/Sprint%203.gif" height="500"/>
  </p>
  <p align="center">Caso queira executar nosso projeto, clique <a href="https://github.com/barbaraport/api-claradb/tree/main/docs/running_project">aqui</a>.</p>

<h2 align="center">:bookmark_tabs: <i>Mockups</i> :memo:</h3>
<p align="justify">O usuário entrará primeiramente na tela de login e se ele estiver cadastrado, pode acessar o app.</p> Caso uma nova versão dos termos de uso esteja disponível e o usuário ainda não estiver de acordo com eles, a tela com essa nova versão é exibida.</p>
<p align="justify">Da página <i>home</i> é possível navegar para as outras páginas do app. Na página de pesquisa das FOLs, ao buscar algum documento de acordo com o filtro escolhido, e uma nova tela se abrirá com os resultados. Ao selecionar uma opção, caso o documento selecionado exista na nossa base de dados, o PDF é exibido diretamente na página inicial do documento selecionado. Caso o documento não exista, é exibido ao usuário que o documento escolhido não está disponível.</p>
<p align="justify">Ao logar no FolConn <i>web</i> é possível visualizar os acessos ao app e, também, o acesso às FOLs seja por FOL ou por usuários. Ambos apresentam a localização do usuário, data, hora e, caso ele esteja de acordo, o seu nome.</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/app/1_login.png" height="500"/>
  <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/app/2_home.png" height="500"/>
  <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/app/3_menu.png" height="500"/>
  <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/app/4_filter_fols.png" height="500"/>
  <img src="https://github.com/barbaraport/api-claradb/blob/main/docs/mockups/app/5_see_fols.png" height="500"/>
</p>
  <p align="center">
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/web/login_admin.png" width="700"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/web/landing_page.png" width="700"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/web/user_activity.png" width="700"/>
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/mockups/web/user_fol.png" width="700"/>
  </p>
  
  
  <h2 align="center">Banco de Dados :open_file_folder:</h2>
  <p align="justify">Utilizamos o MongoDB como o nosso banco de dados. Ele é um SGBD NoSQL e muito utilizado para acesso rápido aos dados. Como o aplicativo é, em sua maior parte, <i>read-only</i>, trará benefícios e não há necessidade de um banco normalizado, que é mais custoso e pode demorar mais para se obter os dados desejados.</p>
<h3><i>:file_cabinet: FOLsFiles Collection</i></h3>


```javascript
{
     "_id": ObjectId,
     "Equipment": String,
     "FileName": String
}
```
<h3><i>AdminUsers Collection</i> 👩‍👦‍👦</h3>


```javascript
{
     "_id": ObjectId,
     "Name": String,
     "Login": String,
     "Password": Binary,
}
```
<h3><i>CurrentTermsOfUse Collection</i>:white_check_mark:</h3>


```javascript
{
     "_id": ObjectId,
     "currentVersion": String,
     "options": [
          {
              "option": String,
              "text": String
          },
     ]
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
     "Remarks": String,
     "Keywords": Array
}
```
<h3><i>:calling: EquipmentUsers Collection</i></h3>


```javascript
{
     "_id": ObjectId,
     "Equipment": String,
     "Users": [
          {
               "UserID": ObjectId,
               "Token": String
          },
     ]
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
     "Equipment": Array,
     "Token": String,
     "TermsOfUse": {
          "currentVersion": Array,
          "history": [
               {
                   "option": String,
                   "modifiedTo": Boolean,
                   "dateTime": Date
               },
          ]
     }
}
```


  <h2 align="center"><i>Burndown</i> :date::chart_with_downwards_trend:</h3>
                    <p align="justify">Durante essa <i>sprint</i> desenvolvemos as duas funcionalidades faltantes. Além disso, realizamos os ajustes finais tanto no sistema <i>web</i> e no <i>app</i> que achávamos necessários que o app torne-se mais atrativo ou que o próprio cliente pediu.</p>
  <p align="center">
    <img src="https://raw.githubusercontent.com/barbaraport/api-claradb/main/docs/burndown/Burndown%20Sprint%203.png"/>
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
