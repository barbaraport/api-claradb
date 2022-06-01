import { AppRegistry } from 'react-native';
import { FolconnApp } from './src/FolconnApp';
import messaging from "@react-native-firebase/messaging";

messaging().setBackgroundMessageHandler(async remoteMessage => {
});

AppRegistry.registerComponent("Folconn", () => FolconnApp);
