import { ServerAccess } from "../enumerations/ServerAccess";
import { ServerRoutes } from "../enumerations/ServerRoutes";
import { StorageKeys } from "../enumerations/StorageKeys";

export class UserService {

    public static async performLogin(login: string, password: string): Promise<void> {
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
            
            window.location.href = window.location.origin + "/home";
    
        }else {
            alert("Invalid credentials");
    
        }

    }

    public static async checkSession() {
        const userId = localStorage.getItem(StorageKeys.USER_ID);

        const requestBody = {
            userId: userId
        }

        let request: RequestInit = {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const url = "http://" + ServerAccess.SERVER_IP + ":" + ServerAccess.SERVER_PORT + ServerRoutes.CHECK_SESSION;
        const response = await fetch(url, request);

        if (response["ok"]) {
            const responseBody = await response.json();

            if (responseBody["isValid"] === false) {
                localStorage.clear();

                window.location.href = window.location.origin + "/login";

            }

        } else {
            localStorage.clear();

            window.location.href = window.location.origin + "/login";

        }

    }

    public static performLogout() {
        localStorage.clear();

        window.location.href = window.location.origin + "/login";

    }

}
