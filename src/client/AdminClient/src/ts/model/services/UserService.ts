import { ServerAccess } from "../enumerations/ServerAccess";
import { ServerRoutes } from "../enumerations/ServerRoutes";
import { StorageKeys } from "../enumerations/StorageKeys";

export class UserService {

    public static async performLogin(login: string, password: string): Promise<void> {
        debugger;
        const credentials = {
            login: login,
            password: password
        }

        let request: RequestInit = {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json'
            }
       }

        const url = "http://" + ServerAccess.SERVER_IP + ":" + ServerAccess.SERVER_PORT + ServerRoutes.ADMIN_LOGIN;
        const response = await fetch(url, request);

        if(response["ok"]){
            const userId = await response.json();

            localStorage.setItem(StorageKeys.USER_ID, userId["id"]);
            
            alert("logado");
    
        }else {
            alert("ocorreu um erro");
    
        }
    }
}