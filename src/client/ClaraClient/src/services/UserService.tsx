import { ApiAccess } from "../enumerations/ApiAccess";
import { Credential } from "../model/Credential";
import { User } from "../model/User";

export class UserService {

     public async login(user: User) {

          let request = {
               method: "POST",
               body: JSON.stringify(user),
               headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/authentication/login", request);

          if(response["ok"]){
               const userInformations = await response.json();

               const credential = new Credential();

               credential.setCode(userInformations["id"]);

               return credential;
          }

          return null;
     }
}