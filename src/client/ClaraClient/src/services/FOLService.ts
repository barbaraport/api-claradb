import { ApiAccess } from "../enumerations/ApiAccess";
import { FOLSearchResult } from "../interfaces/FOLSearchResult";

export class FOLService {

    public static async getFolsByEquipment(equipment: string) {
        let request = {
             method: "GET",
             headers: {
                  Accept: 'application/json',
             }
        }

        const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/fol/getByEquipment?equipment=" + equipment, request);

        if(response["ok"]){
             const equipmentFols = await response.json() as Array<FOLSearchResult>;

             return equipmentFols;
        }

        throw new Error("Unable to gets the FOLs from the server");
   }

}