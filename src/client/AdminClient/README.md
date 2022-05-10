# :running_woman: Como rodar o sistema administrativo

Primeiramente, clone o repositório. Atente-se sobre o caminho do clone dentro da sua máquina. Evite que quaisquer pastas tenham caracteres especiais e espaços no nome. Depois, siga os seguintes passos:

1. Instale o NodeJS. Talvez seja necessário reiniciar o computador para que a instalação seja reconhecida.
2. Abra a pasta `api-claradb/src/client/AdminClient/` no Visual Studio Code. Essa pasta é correspondente ao projeto *React* do aplicativo *web*.
3. No terminal, execute o comando ```npm install``` para instalar todas as dependências do *app*.
4. Um outro detalhe para que você tenha a experiência completa: é necessário [executar o back-end](https://github.com/barbaraport/api-claradb/tree/main/src/server) e inserir no arquivo ```AdminClient/src/ts/model/enumerations/ServerAccess.ts``` o IP e a porta do servidor.
5. Certifique-se de que você está na pasta `api-claradb/src/client/AdminClient/` e compile o nosso sistema com o comando ```npm run build``` e depois execute o comando ```npm run dev```. O *app web* automaticamente abrirá no seu navegador!
