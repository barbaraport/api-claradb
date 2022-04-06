import React, { Component } from "react";
import { Alert, Text, View } from "react-native";
import { Styles } from "../styles/Styles";
import { FolconnButton } from "./FolconnButton";
import { FolconnInput } from "./FolconnInput";

interface LoginFormProps {
	redirectPageFunction: Function;
}

interface LoginFormState {
	typedUserName: string;
	typedPassword: string;
}

export class LoginForm extends Component<LoginFormProps, LoginFormState> {
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
			//Alert.alert("Credenciais inválidas", "Os campos de usuário e senha não devem ser vazios");
			Alert.alert(
				"Invalid credentials",
				"The username and password fields must be not empty"
			);
		} else {
			Alert.alert("Realizando login");

			this.props.redirectPageFunction("Home");
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
