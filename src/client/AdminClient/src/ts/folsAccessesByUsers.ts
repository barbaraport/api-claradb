import { AdminService } from "./model/services/AdminService";

export function setFocusToInput(inputIdToFocus: string) {
    const targetInput = document.getElementById(inputIdToFocus);

    if (targetInput) {
        targetInput.focus();
    }
}

let userAccessDataDict:{[user:string] : any} =[]
async function getFolAccessesByUser(user:string){
    if(!userAccessDataDict[user]){
        const userAccessessData = await AdminService.getFolAccessesByUser(user);
        userAccessDataDict[user]=userAccessessData;
        return userAccessessData
    }else{
        return userAccessDataDict[user]
    }
}
