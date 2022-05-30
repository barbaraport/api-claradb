import { StorageKeys } from "./model/enumerations/StorageKeys";
import { FOLAccess } from "./model/responses/FOLAccess";
import { AdminService } from "./model/services/AdminService";
import { EffectiveFOLsAccessResult } from "./model/types/EffectiveFOLsAccessResult";

export function setFocusToInput(inputIdToFocus: string) {
    const targetInput = document.getElementById(inputIdToFocus);

    if (targetInput) {
        targetInput.focus();

    }

}

async function getFolsAccessesData() {
    const attemptsData = await AdminService.getFolAccesses();

    const stringfiedData = JSON.stringify(attemptsData);

    sessionStorage.setItem(StorageKeys.FOLS_ACCESS_DATA, stringfiedData);

    searchFolsAccesses();

}

getFolsAccessesData();

export function searchFolsAccesses() {
    const searchInput = document.getElementById("searchInput")! as HTMLInputElement;
    const searchResultOutput = document.getElementById("folSearchResults")! as HTMLDivElement;

    searchResultOutput.innerHTML = "";

    const searchValue = searchInput.value.toLowerCase();

    const stringfiedAccessesData = sessionStorage.getItem(StorageKeys.FOLS_ACCESS_DATA);

    const searchResults: EffectiveFOLsAccessResult = {};

    if (stringfiedAccessesData) {
        const accessesData = JSON.parse(stringfiedAccessesData) as Array<FOLAccess>;

        for (let i = 0; i < accessesData.length; i++) {
            const accessData = accessesData[i];

            const folAccessTitle = accessData['folTitle'];

            if(folAccessTitle.toLowerCase().includes(searchValue)){

                if(folAccessTitle in searchResults){
                    searchResults[folAccessTitle] += 1;

                }else {
                    searchResults[folAccessTitle] = 1;

                }

            }

        }

    }

    const items = Object.entries(searchResults);

    const orderedItems = items.sort((a: Array<string | number>, b: Array<string | number>) => {
        const result = (a[1] as number) - (b[1] as number);

        return result
    }).reverse();

    const keys: Array<string> = [];

    for (let i = 0; i < orderedItems.length; i++) {
        const item = orderedItems[i];

        keys.push(item[0]);
    }

    for (let i = 0; i < keys.length; i++) {
        const folTitle = keys[i];

        const totalAccesses = searchResults[folTitle];

        const textElement = document.createElement("label");

        textElement.innerText = folTitle + " - " + totalAccesses + " access";

        if(totalAccesses > 1) {
            textElement.innerText += "es";

        }

        textElement.classList.add("folSearchResult");

        searchResultOutput.appendChild(textElement);

        textElement.onclick = function(this) {
            const targetLabel = this as HTMLLabelElement;

            const labelText = targetLabel.innerText;

            const folTitle = labelText.split(" - ")[0];

            showFolAccesses(folTitle);

        }
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

function showFolAccesses(folTitle: string) {
    const accessesOutputElement = document.getElementById("searchResult")! as HTMLDivElement;

    accessesOutputElement.innerHTML = "";

    const stringfiedAccessesData = sessionStorage.getItem(StorageKeys.FOLS_ACCESS_DATA);

    if(stringfiedAccessesData) {
        const attemptsData = JSON.parse(stringfiedAccessesData) as Array<FOLAccess>;

        for (let i = 0; i < attemptsData.length; i++) {
            const accessData = attemptsData[i];

            const loginLocation = accessData["geolocation"];

            if(accessData['folTitle'] === folTitle){
                const resultContainer = document.createElement("tr");
                resultContainer.classList.add("accessResult");

                const userNameLabel = document.createElement("td");

                if (accessData['userName']) {
                    userNameLabel.innerText = accessData['userName'];

                }else {
                    userNameLabel.innerText = "Unknown";

                }

                const userLocationLabel = document.createElement("td");
                userLocationLabel.innerText = loginLocation['city'] + ", " + loginLocation['country'];

                const userAccessDateLabel = document.createElement("td");
                userAccessDateLabel.innerText = accessData['date'];

                resultContainer.appendChild(userNameLabel);
                resultContainer.appendChild(userLocationLabel);
                resultContainer.appendChild(userAccessDateLabel);

                accessesOutputElement.appendChild(resultContainer);

            }

        }

    }

}
