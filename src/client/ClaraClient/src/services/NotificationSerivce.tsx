import { ApiAccess } from "../enumerations/ApiAccess";

export class NotificationService {

     public static async persistToken(token: string, userID: string) {

          let request = {
               method: "POST",
               body: JSON.stringify({token: token, userID: userID}),
               headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
               }
          }

          await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/notification/persistToken", request);
     }
}