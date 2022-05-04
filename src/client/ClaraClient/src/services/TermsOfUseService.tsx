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
}