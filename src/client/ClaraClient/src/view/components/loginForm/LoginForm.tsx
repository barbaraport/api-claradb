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

	private submitLoginForm() {
		const userName = this.state["typedUserName"];
		const password = this.state["typedPassword"];

		if (userName === "" || password === "") {
			Alert.alert(
				"Invalid credentials",
				"The username and password fields must be not empty"
			);
		} 
		else {
			Alert.alert("Credentials", "Username: " + this.state.typedUserName + ". Password: " + this.state.typedPassword);

			let user = new User();
			user.setUserName(this.state.typedUserName);
			user.setPassword(this.state.typedPassword);
			
			let credential = this.userService.login(user);
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
