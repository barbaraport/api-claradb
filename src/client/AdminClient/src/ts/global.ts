import { UserService } from "./model/services/UserService";

async function checkSession() {
    await UserService.checkSession();
}

checkSession();

export function openMenu() {
    const menuOptions = document.getElementById("menuOptions")!;

    const isShow = menuOptions.classList.contains("show");

    if(!isShow) {
        menuOptions.classList.add("show");
        
    }else {
        menuOptions.classList.remove("show");
        
    }
}

export function closeMenu() {
    const menuOptions = document.getElementById("menuOptions")!;

    const isShow = menuOptions.classList.contains("show");

    if(isShow) {
        menuOptions.classList.remove("show");
        
    }
}

export function performLogout() {
    UserService.performLogout();
}