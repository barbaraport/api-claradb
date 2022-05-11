import Geolocation from "@react-native-community/geolocation";
import { PermissionsAndroid, Platform } from "react-native";
import RNAndroidLocationEnabler, { PromptFuncResponse } from "react-native-android-location-enabler";

export class LocationService {


     public async getUserPosition() {
          if (Platform.OS === "android") {

               let isGPSEnabled = await this.verifyGPS();

               if (isGPSEnabled === "already-enabled" || isGPSEnabled === "enabled") {
                    const granted = await this.checkPermissionToGetLocation();

                    if (granted) {
                         let position = this.getCurrentPosition();
                         return position;
                    }
                    else {
                         return null;
                    }
               }
               else {
                    return null;
               }
          }

          return await this.getCurrentPosition();
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

     private async verifyGPS(): Promise<PromptFuncResponse > {

          let verification: PromptFuncResponse = await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ fastInterval: 10000, interval: 5000 });

          // let verification: boolean = await new Promise((res, rej) => {
          //      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ fastInterval: 10000, interval: 5000 })
          //           .then((data) => {
          //                res(true);
          //           })
          //           .catch((error) => {
          //                rej(false);
          //           });

          // });

          return verification;
     }

     private async getCurrentPosition() {
          let position = await new Promise((res, rej) => {
               Geolocation.getCurrentPosition(
                    (position) => {
                         res({ lat: position.coords.latitude, long: position.coords.longitude })
                    },
                    (error) => rej(error),
                    { enableHighAccuracy: false, timeout: 20000, maximumAge: 3600000 }
               );
          });

          return position;
     }

}