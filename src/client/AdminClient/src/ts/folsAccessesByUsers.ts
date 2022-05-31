import { AdminService } from "./model/services/AdminService";
import { EffectiveUsersResult } from "./model/types/EffectiveUsersResult";
import { Users } from "../ts/model/responses/Users";


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

let users:Users[]=[]
async function getUsers(){
    users = await AdminService.getAllUsers()

    await searchUsersAccesses()
}

getUsers()


export async function searchUsersAccesses() {
    const searchInput = document.getElementById("searchInput")! as HTMLInputElement;
    const searchResultOutput = document.getElementById("folSearchResults")! as HTMLDivElement;

    searchResultOutput.innerHTML = "";

    const searchValue = searchInput.value.toLowerCase();

    const searchResults:EffectiveUsersResult = {};

    if (users) {
        users.forEach(user => {
            if(user.Username.toLowerCase().includes(searchValue)){
                if(user.Username in searchResults){
                    searchResults[user.Username]+=1
                }else{
                    searchResults[user.Username]=1
                }
            }
        });
    }

    const items = Object.entries(searchResults);
    const orderedItems = items.sort((a: Array<string | number>, b: Array<string | number>) => {
        const result = (a[1] as number) - (b[1] as number);
        return result
    }).reverse();

    const keys: Array<string> = [];

    orderedItems.forEach(item => {
        keys.push(item[0]);
    });

    keys.forEach(async user => {
        const accesses = await getFolAccessesByUser(user)
        if(accesses.count<=0){
            return;
        };
        const textElement = document.createElement("label");
        textElement.innerText = `${user} - ${accesses.count} - fols accessed`
        textElement.classList.add("folSearchResult");
        searchResultOutput.appendChild(textElement);

        textElement.onclick = function(this) {
            const targetLabel = this as HTMLLabelElement;
            const labelText = targetLabel.innerText;
            // showFolAccesses(folTitle);
        }
    });
}
