import { ServerAccess } from "../enumerations/ServerAccess";
import { ServerRoutes } from "../enumerations/ServerRoutes";
import { FOLAccess } from "../responses/FOLAccess";
import { LoginAttempt } from "../responses/LoginAttempt";

export class AdminService {
	public static async getLoginAttempts() {
		let request: RequestInit = {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		};

		const url =
			"http://" +
			ServerAccess.SERVER_IP +
			":" +
			ServerAccess.SERVER_PORT +
			ServerRoutes.LOGIN_ATTEMPT;
		const response = await fetch(url, request);

		if (response["ok"]) {
			const responseBody = (await response.json()) as Array<LoginAttempt>;

			return responseBody;
		} else {
			throw new Error(
				"Unable to fetch the login attempts data from the server"
			);
		}
	}

	public static async getFolAccesses() {
		let request: RequestInit = {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		};

		const url =
			"http://" +
			ServerAccess.SERVER_IP +
			":" +
			ServerAccess.SERVER_PORT +
			ServerRoutes.FOL_ACCESSES;
		const response = await fetch(url, request);

		if (response["ok"]) {
			const responseBody = (await response.json()) as Array<FOLAccess>;

			return responseBody;
		} else {
			throw new Error(
				"Unable to fetch the FOLs accesses data from the server"
			);
		}
	}

	public static async getFolAccessesByUser(user:string) {
		let request: RequestInit = {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		};

		const url = `http://${ServerAccess.SERVER_IP}:${ServerAccess.SERVER_PORT}${ServerRoutes.USER_FOL_ACCESSES}?user=${user}`
		const response = await fetch(url, request)

		if (response["ok"]) {
			const responseBody = (await response.json()) as Array<any>;

			return responseBody;
		} else {
			throw new Error(
				"Unable to fetch the FOLs accesses data from the server"
			);
		}
	}
}
