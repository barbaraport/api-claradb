import { Alert } from "react-native";
import { Credential } from "../model/Credential";
import { User } from "../model/User";

export class UserService {

     public login(user: User): Credential {

          let request = {
               method: "GET",
               body: JSON.stringify(user)
          }

          let response = "afjs";

          // fetch('localhost:5000/', request)
          //      .then((response) => {
          //           console.log(response)
          //      });

               console.log(response)

          return new Credential("Hi");
     }
}