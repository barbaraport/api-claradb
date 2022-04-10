import { ApiAccess } from "../enumerations/ApiAccess";
import { Credential } from "../model/Credential";
import { User } from "../model/User";

export class UserService {

     public async login(user: User): Promise<Credential | null> {

          let request = {
               method: "POST",
               body: JSON.stringify(user),
               headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
               }
          }

          fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/authentication/login", request)
               .then((response) => {
                    response.json().then((body) => {
                         return new Credential(body.id);
                    });
               });

          return null;
     }
}