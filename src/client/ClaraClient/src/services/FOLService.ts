import { ApiAccess } from "../enumerations/ApiAccess";
import { FOLSearchResult } from "../interfaces/FOLSearchResult";

export class FOLService {

     public async getFol () {

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/fol");

          if (response["ok"]) {
               let fol = await response.json();
               fol = "data:application/pdf;base64," + fol.data
               return fol;
          }

          throw new Error(`There was an error getting the FOL File.`);

     }

     public async getFolFirstPage (folTitle: string) {

          let request = {
               method: "GET",
               headers: {
                    Accept: 'application/json',
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/fol/getFirstPage?folTitle=" + folTitle, request);

          if (response["ok"]) {
               const folFirstPage = await response.json() as number;

               return folFirstPage;
          }

          throw new Error(`There was an error to get the first page from ${folTitle} FOL`);
     }

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

     public static async getFolsCategories(userId: string){
          let request = {
               method: "GET",
               headers: {
                    Accept: 'application/json',
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/fol/getCategories?userId=" + userId, request);

          if (response["ok"]) {
               const folsCategories = await response.json() as Array<string>;

               return folsCategories;
          }

          throw new Error("Unable to gets the FOLs from the server");
     }

     public static async getFolsByCategory(userId: string, category: string){
          let request = {
               method: "GET",
               headers: {
                    Accept: 'application/json',
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/fol/getByCategory?userId=" + userId + "&category=" + category, request);

          if (response["ok"]) {
               const folsCategories = await response.json() as Array<FOLSearchResult>;

               return folsCategories;
          }

          throw new Error("Unable to gets the FOLs from the server");
     }

     public static async getFolsByTitle(userId: string, title: string){
          let request = {
               method: "GET",
               headers: {
                    Accept: 'application/json',
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/fol/getByTitle?userId=" + userId + "&title=" + title, request);

          if (response["ok"]) {
               const folsCategories = await response.json() as Array<FOLSearchResult>;

               return folsCategories;
          }

          throw new Error("Unable to gets the FOLs from the server");
     }

}