# How to run the client

## Android
First, you'll need to configure the Java environment variables.
1. Install NodeJS.
2. Create the ```JAVA_HOME``` environment variable in the system (not in the user). It stores the location of your Java installation. Ex.: ```C:\Program Files\Java\jdk-15.0.2```
3. Add the path to ```C:\Program Files\Java\jdk-15.0.2\bin``` to a variable named ```Path``` in system variables. It will recognize the Java commands in terminal.
4. Please write ```java --version``` in the Terminal. If the command "bleeds", it means that you may need to restart your computer to the variables be set. If you had restarted and it still doesn't working, check the previously steps.
5. Open the ClaraClient folder in Visual Studio Code.
6. The most affordable way to run the app is by Expo. Download the Expo Go app and return here to run our React Native App.
7. Run our React Native app using the command ```expo start --tunnel``` . It will displays the QR Code and then you can access our app!