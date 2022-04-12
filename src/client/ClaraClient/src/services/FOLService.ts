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

          if (response["ok"]) {
               const equipmentFols = await response.json() as Array<FOLSearchResult>;

               return equipmentFols;
          }

          throw new Error("Unable to gets the FOLs from the server");
     }

     public static async getFolsByStatus(userId: string, status: string) {
          let request = {
               method: "GET",
               headers: {
                    Accept: 'application/json',
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/fol/getByStatus?userId=" + userId + "&status=" + status, request);

          if (response["ok"]) {
               const equipmentFols = await response.json() as Array<FOLSearchResult>;

               return equipmentFols;
          }

          throw new Error("Unable to gets the FOLs from the server");
     }

     public static async getFolsByKeyword(userId: string, keywords: string) {
          let request = {
               method: "GET",
               headers: {
                    Accept: 'application/json',
               }
          }

          const keywordsList = keywords.split(",")

          let normalizedKeywords = "";

          for (let i = 0; i < keywordsList.length; i++) {
               let keyword = keywordsList[i];
               
               keyword = keyword.trim();

               normalizedKeywords += keyword + ",";

          }

          if(normalizedKeywords.endsWith(",")){
               normalizedKeywords = normalizedKeywords.substring(0, normalizedKeywords.length - 1);

          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/fol/getByKeywords?userId=" + userId + "&keywords=" + normalizedKeywords, request);

          if (response["ok"]) {
               const equipmentFols = await response.json() as Array<FOLSearchResult>;

               return equipmentFols;
          }

          throw new Error("Unable to gets the FOLs from the server");
     }

}