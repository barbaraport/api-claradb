import { ApiAccess } from "../enumerations/ApiAccess";
import { Credential } from "../model/Credential";
import { User } from "../model/User";
import { LocationService } from "./LocationService";

export class UserService {

     private locationService = new LocationService();

     public async login(user: User) {

          let position = await this.locationService.getUserPosition();

          let request = {
               method: "POST",
               body: JSON.stringify({ user: user, position: position }),
               headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/authentication/login", request);

          if (response["ok"]) {
               const userInformations = await response.json();

               const credential = new Credential();

               credential.setCode(userInformations["id"]);

               return credential;
          }

          return null;
     }
}