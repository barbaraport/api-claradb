import Geolocation from "@react-native-community/geolocation";
import { PermissionsAndroid, Platform } from "react-native";

export class LocationService {

     public async getUserPosition() {

          let position = null;

          if (Platform.OS == "android") {
               const granted = await this.checkPermissionToGetLocation();

               if (granted) {
                    position = await this.getCurrentPosition();
               }
          }
          else {
               position = await this.getCurrentPosition();
          }

          return position;
     }

     private async checkPermissionToGetLocation() {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
               return true;
          }
          else {
               return false;
          }
     }

     private async getCurrentPosition() {
          return new Promise((res, rej) => {
               Geolocation.getCurrentPosition(
                    (position) => {
                         res({ lat: position.coords.latitude, long: position.coords.longitude })
                    },
                    (error) => rej(error),
                    { enableHighAccuracy: true }
               );
          });
     }

}