import React from "react";
import messaging from "@react-native-firebase/messaging";
import { Alert } from "react-native";


function printToken(token: string) {
     console.log(token);
}

function getMessage(message: any) {
     console.log(message)
}

async function requestUserPermission() {
     const authStatus = await messaging().requestPermission();
     const enabled =
       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
   
     if (enabled) {
       console.log('Authorization status:', authStatus);
     }
   }

export function Notifications() {

     requestUserPermission().then((permission) => {
          console.log("permissao aceita!!!!!!!!!!!!!!!!!!!!!!!!!");
     });

     messaging().getToken().then((token) => {
          console.log(token);
     });

     console.log("teste 1");
     messaging().onTokenRefresh(printToken);

     console.log("teste 2");
     messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
     });

     return <></>
}