import { ApiAccess } from "../enumerations/ApiAccess";

export class CarService {

     public async getUserCars (credential: string) {

          let request = {
               method: "POST",
               body: JSON.stringify({"code":credential}),
               headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
               }
          }

          const response = await fetch("http://" + ApiAccess.host + ":" + ApiAccess.port + "/car/carsByUser", request);

          if(response["ok"]){
               const userEquipments = await response.json();
               return userEquipments["equipments"];
          }

          return null;
     }
}