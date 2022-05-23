import { Alert } from "react-native";
import { ApiAccess } from "../enumerations/ApiAccess";
import { TermsOfUseOption } from "../interfaces/TermsOfUseOptions";

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

     public async getTermsOfUseOptions() {

          let request = {
               method: "GET",
               headers: {
                    Accept: 'application/json',
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/termsOfUse/getOptions", request);

          if (response["ok"]) {
               const options = await response.json() as Array<TermsOfUseOption>;

               return options;
          }

          throw new Error(`There was an error to get the Terms Of Use options`);
     }
     
     public async getUserSelectedTermsOfUseOptions(userId: string) {

          let request = {
               method: "GET",
               headers: {
                    Accept: 'application/json',
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + 
               "/termsOfUse/getUserSelectedOptions?userId=" + userId, request);

          if (response["ok"]) {
               const options = await response.json() as Array<string>;

               return options;
          }

          throw new Error(`There was an error to get the Terms Of Use user selected options`);
     }

     public static async acceptTermsOfUse(acceptedOptions: Array<String>, userId: string) {
          const body = {
               acceptedOption: acceptedOptions,
               userId: userId
          }

          let request = {
               method: "POST",
               body: JSON.stringify(body),
               headers: {
                    "Content-Type": 'application/json',
               }
          }
          
          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/termsOfUse/accept", request);
          
          if (!response["ok"]) {
               throw new Error(`Can not change the state of the acceptance of the terms of use`);
          }

          Alert.alert("Your acceptance of the terms was updated");
          
     }
}