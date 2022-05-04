import { Alert } from "react-native";
import { ApiAccess } from "../enumerations/ApiAccess";

export class TermsOfUseService {

     public async getTermsOfUse() {

          let request = {
               method: "GET",
               headers: {
                    Accept: 'application/json',
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/termsOfUse", request);

          if (response["ok"]) {
               const termsOfUse = await response.json();
               return termsOfUse.termsOfUse as string;
          }

          throw new Error(`There was an error to get the Terms Of Use`);
     }

     public static async acceptTermsOfUse(accept: boolean, userId: string) {
          let request = {
               method: "POST",
               body: JSON.stringify({accept: accept, userId: userId}),
               headers: {
                    "Content-Type": 'application/json',
               }
          }
          
          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/termsOfUse/accept", request);
          
          if (!response["ok"]) {
               throw new Error(`Can not change the state of the acceptance of the terms of use`);
          }
          
          let message = "The terms of use was ";

          if(accept === true){
               message += "accepted";

          }else {
               message += "declined";

          }

          Alert.alert(message);
          
     }
}