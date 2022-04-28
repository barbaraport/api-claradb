# :running_woman: Como rodar o aplicativo

Primeiramente, clone o repositório. Atente-se sobre o caminho do clone dentro da sua máquina. Evite que quaisquer pastas tenham caracteres especiais e espaços no nome. Depois, siga os seguintes passos:

## Android :robot:

1. Instale o JDK (Java Development Kit). Recomendamos utilizar o [JDK 8](https://www.oracle.com/br/java/technologies/javase/javase8-archive-downloads.html). Talvez seja necessário reiniciar o computador para que a instalação seja reconhecida.
2. Instale o NodeJS. Talvez seja necessário reiniciar o computador para que a instalação seja reconhecida.
3. Crie a variável de ambiente, para o sistema, chamada ```JAVA_HOME```. Nela terá o caminho em que o JDK está instalado. Exemplo: ```C:\Program Files\Java\jdk-15.0.2```.
4. Adicione o caminho ```C:\Program Files\Java\jdk-15.0.2\bin``` (não se esqueça de verificar a versão do seu JDK) a uma variável chamada ```Path```, já existente, nas variáveis de sistema. Crie uma nova linha (:warning: cuidado para não alterar os caminhos já existentes :warning:) Esse passo faz com que comandos do Java sejam reconhecidos no terminal.
5. Digite ```java --version``` no terminal para ver se tudo está configurado corretamente. Caso não funcione mesmo assim, reinicie o computador para ter certeza que tudo foi aplicado. Se mesmo assim não funcionar, verifique se você configurou corretamente as variáveis nos passos anteriores.
6. Instale o Android Studio para obter o SDK necessário para a execução do *app* em um dispositivo móvel.
7. Crie uma variável de ambiente para o sistema, chamada de `ANDROID_HOME`. Seu valor deve ser o caminho do SDK do Android dentro do seu computador. Exemplo: `C:\Users\seu-nome-de-usuario\AppData\Local\Android\Sdk`.
8. Adicione o caminho `C:\Users\seu-nome-de-usuario\AppData\Local\Android\Sdk\platform-tools` a uma variável chamada ```Path```, já existente, nas variáveis de sistema. Crie uma nova linha (:warning: cuidado para não alterar os caminhos já existentes :warning:). Esse passo faz com que o comando `adb devices` seja reconhecido no terminal. Assim, ao conectar o seu celular via USB é possível ver se ele é reconhecido como um dispositivo apto a executar o *app* ou não.
9. Nas configurações de desenvolvedor do seu dispositivo móvel, ative a opção `Depuração USB` para que o *app* possa ser reconhecido pelo `adb` e possa ser instalado no seu celular via USB.
10. Abra a pasta `api-claradb/src/client/ClaraClient/` no Visual Studio Code. Essa pasta é correspondente ao projeto *React Native* do aplicativo *mobile*.
11. No terminal, execute o comando ```npm install``` para instalar todas as dependências do *app*.
12. Um outro detalhe para que você tenha a experiência completa: é necessário [executar o back-end](https://github.com/barbaraport/api-claradb/tree/main/src/server) e inserir no arquivo ```ClaraClient/src/enumerations/ApiAccess.tsx``` o IP e a porta do servidor.
13. O jeito mais simples para executar o aplicativo é via USB. Sendo assim, conecte o seu celular no computador. O celular deve estar desbloqueado.
14. Certifique-se de que você está na pasta `api-claradb/src/client/ClaraClient/` e execute o nosso app com o comando ```npm run android``` . O app passará por um processo de *build* e a primeira vez pode demorar um pouco. Quando tudo estiver finalizado, o *app* automaticamente abrirá no seu celular!
