export function openMenu() {
    const menuOptions = document.getElementById("menuOptions")!;

    const isShow = menuOptions.classList.contains("show");

    if(!isShow) {
        menuOptions.classList.add("show");
        
    }
}

export function closeMenu() {
    const menuOptions = document.getElementById("menuOptions")!;

    const isShow = menuOptions.classList.contains("show");

    if(isShow) {
        menuOptions.classList.remove("show");
        
    }
}