import React, { Component } from "react";
import { Alert, Text, TouchableNativeFeedbackBase, View } from "react-native";
import { User } from "../../../model/User";
import { UserService } from "../../../services/UserService";
import { Styles } from "../../assets/styles/Styles";
import { FolconnButton } from "../button/FolconnButton";
import { FolconnInput } from "../input/FolconnInput";

interface LoginFormProps {
	redirectPageFunction: Function;
}

interface LoginFormState {
	typedUserName: string;
	typedPassword: string;
}

export class LoginForm extends Component<LoginFormProps, LoginFormState> {

	private userService = new UserService();

	constructor(props: LoginFormProps) {
		super(props);

		this.state = {
			typedUserName: "",
			typedPassword: "",
		};

		this.submitLoginForm = this.submitLoginForm.bind(this);
		this.receiveTypedPassword = this.receiveTypedPassword.bind(this);
		this.receiveTypedUserName = this.receiveTypedUserName.bind(this);
	}

	private receiveTypedUserName(typedUserName: string) {
		this.setState({ typedUserName: typedUserName });
	}

	private receiveTypedPassword(typedPassword: string) {
		this.setState({ typedPassword: typedPassword });
	}

	private async submitLoginForm() {
		const userName = this.state["typedUserName"];
		const password = this.state["typedPassword"];

		if (userName === "" || password === "") {
			Alert.alert(
				"Invalid credentials",
				"The username and password fields must be not empty"
			);
		}
		else {
			let user = new User();
			user.setUserName(this.state.typedUserName);
			user.setPassword(this.state.typedPassword);

			let credential = await this.userService.login(user);
			let credentialCode = null;

			if (credential != null || credential != undefined) {

				credentialCode = credential.getCode();

				if (credentialCode != null && credentialCode != undefined && credentialCode != "") {
					// setar credential globalmente de alguma forma D:
					// let code = credential.getCode();
					this.props.redirectPageFunction("Home");
				}
				else {
					Alert.alert("Wrong Credentials", "No user found. Verify your credentials.");
				}
			}
		}
	}

	private buildComponent() {
		let component = (
			<View style={[Styles.formModal, Styles.shadow]}>
				<Text style={Styles.title}>Welcome!</Text>
				<View>
					<FolconnInput
						placeholder="Username"
						type="username"
						ejectFunction={this.receiveTypedUserName}
						secureText={false}
					/>
					<FolconnInput
						placeholder="Password"
						type="password"
						ejectFunction={this.receiveTypedPassword}
						secureText={true}
					/>
					<FolconnButton
						text="Log in"
						onClick={this.submitLoginForm}
					/>
				</View>
			</View>
		);

		return component;
	}

	render() {
		let component = this.buildComponent();

		return component;
	}
}
