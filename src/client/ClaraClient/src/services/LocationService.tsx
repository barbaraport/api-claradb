import Geolocation from "@react-native-community/geolocation";
import { PermissionsAndroid, Platform } from "react-native";
import { ApiAccess } from "../enumerations/ApiAccess";

export class LocationService {

     public async saveUserLocation(position: any) {

          let request = {
               method: "POST",
               body: JSON.stringify(position),
               headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/authentication/login", request);
     }

     public async getUserPosition() {

          let position = null;

          if (Platform.OS == "android") {
               const granted = await this.checkPermissionToGetLocation();

               if (granted) {
                    position = this.getCurrentPosition();
               }
          }
          else {
               position = this.getCurrentPosition();
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

     private getCurrentPosition() {
          Geolocation.getCurrentPosition((position) => {
               return position;
          });
     }

}