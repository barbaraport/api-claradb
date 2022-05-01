import { UserService } from "./model/services/UserService";

export async function performLogin(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    const formElements = form.children;

    const loginInput = formElements[0] as HTMLInputElement;
    const passwordInput = formElements[1] as HTMLInputElement;

    const login = loginInput.value;
    const password = passwordInput.value;

    await UserService.performLogin(login, password);

}
