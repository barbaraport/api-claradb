import { ServerAccess } from "../enumerations/ServerAccess";
import { ServerRoutes } from "../enumerations/ServerRoutes";
import { LoginAttempt } from "../responses/LoginAttempt";

export class AdminService {

    public static async getLoginAttempts(){
        let request: RequestInit = {
            method: "GET",
            headers: {
                Accept: 'application/json',
            }
        }

        const url = "http://" + ServerAccess.SERVER_IP + ":" + ServerAccess.SERVER_PORT + ServerRoutes.LOGIN_ATTEMPT;
        const response = await fetch(url, request);

        if (response["ok"]) {
            const responseBody = await response.json() as Array<LoginAttempt>;

            return responseBody;
        } else {
            throw new Error("Unable to fetch the login attempts data from the server");
        }
        
    }

}