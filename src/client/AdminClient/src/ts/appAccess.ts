import { StorageKeys } from "./model/enumerations/StorageKeys";
import { LoginAttempt } from "./model/responses/LoginAttempt";
import { AdminService } from "./model/services/AdminService";
import { EffectiveAppAccessResult } from "./model/types/EffectiveAppAccessResult";

async function getLoginAttemptsData() {
    const attemptsData = await AdminService.getLoginAttempts();

    const stringfiedData = JSON.stringify(attemptsData);

    sessionStorage.setItem(StorageKeys.LOGIN_ATTEMPTS_DATA, stringfiedData);

    searchFols();

}

getLoginAttemptsData();

export function setFocusToInput(inputIdToFocus: string) {
    const targetInput = document.getElementById(inputIdToFocus);

    if (targetInput) {
        targetInput.focus();

    }

}

export function searchFols() {
    const searchInput = document.getElementById("searchInput")! as HTMLInputElement;
    const searchResultOutput = document.getElementById("folSearchResults")! as HTMLDivElement;

    searchResultOutput.innerHTML = "";

    const searchValue = searchInput.value.toLowerCase();

    const stringfiedAttemptsData = sessionStorage.getItem(StorageKeys.LOGIN_ATTEMPTS_DATA);

    const searchResults: Array<LoginAttempt> = [];

    if(stringfiedAttemptsData) {
        const attemptsData = JSON.parse(stringfiedAttemptsData) as Array<LoginAttempt>;

        for (let i = 0; i < attemptsData.length; i++) {
            const loginAttempt = attemptsData[i];
            
            if(loginAttempt['country'].toLowerCase().includes(searchValue)){
                searchResults.push(loginAttempt);

            }

        }

    }

    const effectiveResults: EffectiveAppAccessResult = {};

    for (let i = 0; i < searchResults.length; i++) {
        const result = searchResults[i];

        const country = result['country'];

        if(country in effectiveResults){
            effectiveResults[country] += 1;
            
        }else {
            effectiveResults[country] = 1;
            
        }
        
    }

    const keys = Object.keys(effectiveResults);

    for (let i = 0; i < keys.length; i++) {
        const countryName = keys[i];
        
        const totalAccesses = effectiveResults[countryName];

        const textElement = document.createElement("label");
        
        textElement.innerText = countryName + " - " + totalAccesses + " access";
        
        if(totalAccesses > 1) {
            textElement.innerText += "es";

        }

        textElement.classList.add("folSearchResult");

        textElement.onclick = function(this) {
            const targetLabel = this as HTMLLabelElement;

            const labelText = targetLabel.innerText;

            const country = labelText.split(" - ")[0];

            showCountryAccesses(country);

        }

        searchResultOutput.appendChild(textElement);

    }

}

function showCountryAccesses(country: string) {
    const accessesOutputElement = document.getElementById("searchResult")! as HTMLDivElement;

    accessesOutputElement.innerHTML = "";

    const stringfiedAttemptsData = sessionStorage.getItem(StorageKeys.LOGIN_ATTEMPTS_DATA);

    if(stringfiedAttemptsData) {
        const attemptsData = JSON.parse(stringfiedAttemptsData) as Array<LoginAttempt>;

        for (let i = 0; i < attemptsData.length; i++) {
            const loginAttempt = attemptsData[i];
            
            if(loginAttempt['country'] === country){
                const resultContainer = document.createElement("tr");
                resultContainer.classList.add("accessResult");

                const userNameLabel = document.createElement("td");
                userNameLabel.innerText = loginAttempt['userName'];

                const userLocationLabel = document.createElement("td");
                userLocationLabel.innerText = loginAttempt['city'] + ", " + loginAttempt['country'];

                const userAccessDateLabel = document.createElement("td");
                userAccessDateLabel.innerText = loginAttempt['date'];

                resultContainer.appendChild(userNameLabel);
                resultContainer.appendChild(userLocationLabel);
                resultContainer.appendChild(userAccessDateLabel);

                accessesOutputElement.appendChild(resultContainer);

            }

        }

    }


    /*
    <div class="accessResult">
        <label>User X</label>
        <label>São José dos Campos, São Paulo</label>
        <label>16/09/1997 10:00:00</label>
    </div>
    */
}