import { AppRegistry } from 'react-native';
import { FolconnApp } from './src/FolconnApp';
import messaging from "@react-native-firebase/messaging";

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
     console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent("Folconn", () => FolconnApp);
