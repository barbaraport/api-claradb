import Geolocation from "@react-native-community/geolocation";
import { PermissionsAndroid, Platform } from "react-native";

export class LocationService {

     private async askUserAboutAuthorization() {
          if (Platform.OS == "android") {
               try {
                    const granted = await PermissionsAndroid.request(
                         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                         {
                              title: "FolConn wants to know your location",
                              message: "Do you authorizes FolConn to get your location for posterior statistics?",
                              buttonNegative: "Cancel",
                              buttonPositive: "OK",
                         },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                         this.getCurrentLocation();
                    } else {
                         console.log('Location permission denied');
                    }
               } catch (err) {
                    console.warn(err);
               }
          }
     }

     public getCurrentLocation() {
          //Geolocation.requestAuthorization();

          Geolocation.getCurrentPosition((position) => {
               console.log(position);
          },
          (error) => {
               console.log(error.code, error.message);
          },
          {
               enableHighAccuracy: false,
               timeout: 15000,
               maximumAge: 10000
          });
     }
}