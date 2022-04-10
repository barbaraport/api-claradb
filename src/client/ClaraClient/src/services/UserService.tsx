import { ApiAccess } from "../enumerations/ApiAccess";
import { Credential } from "../model/Credential";
import { User } from "../model/User";

export class UserService {

     public login(user: User) {

          let request = {
               method: "POST",
               body: JSON.stringify(user),
               headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
               }
          }

          let credential = new Credential();

          return fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/authentication/login", request)
          .then((response) => {
               return response.json() as Promise<{ data: any }>
          })
          .then((data) => {
               let code = (JSON.parse(JSON.stringify(data)).id);
               console.log(code);

               let credential = new Credential();
               credential.setCode(code);

               return credential;
          });
     }
}