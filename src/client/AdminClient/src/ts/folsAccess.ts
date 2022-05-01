export function setFocusToInput(inputIdToFocus: string) {
    const targetInput = document.getElementById(inputIdToFocus);

    if (targetInput) {
        targetInput.focus();

    }

}

export function searchFols() {
    alert("pesquisando fols");

}
