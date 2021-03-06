import messaging from "@react-native-firebase/messaging";
import React, { Component } from "react";
import { Alert, Text, View } from "react-native";
import { User } from "../../../model/User";
import { TermsOfUseService } from "../../../services/TermsOfUseService";
import { UserService } from "../../../services/UserService";
import { Styles } from "../../assets/styles/Styles";
import { FolconnButton } from "../button/FolconnButton";
import { FolconnInput } from "../input/FolconnInput";

interface LoginFormProps {
	redirectPageFunction: Function,
	setUserIDFunction: Function,
	setPhoneTokenFunction: Function;
}

interface LoginFormState {
	typedUserName: string;
	typedPassword: string;
	token: string;
}

export class LoginForm extends Component<LoginFormProps, LoginFormState> {

	private userService = new UserService();

	constructor(props: LoginFormProps) {
		super(props);

		this.state = {
			typedUserName: "",
			typedPassword: "",
			token: "",
		};

		this.submitLoginForm = this.submitLoginForm.bind(this);
		this.receiveTypedPassword = this.receiveTypedPassword.bind(this);
		this.receiveTypedUserName = this.receiveTypedUserName.bind(this);
	}

	componentDidMount() {
		messaging().getToken().then((token: string) => { this.setState({token: token}) });
		messaging().onTokenRefresh((token: string) => { this.setState({token: token}) });
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
			user.setLogin(this.state.typedUserName);
			user.setPassword(this.state.typedPassword);

			let credential = await this.userService.login(user);

			if (credential != null) {
				const credentialCode = credential.getCode();

				const termsService = new TermsOfUseService();

				const isAcceptingLastVersion = await termsService.isAcceptingLastVersion(credentialCode);

				this.props.setUserIDFunction(credentialCode);

				this.props.setPhoneTokenFunction(this.state.token, credentialCode);
				
				if (isAcceptingLastVersion === true) {
					this.props.redirectPageFunction("Home");

				} else {
					this.props.redirectPageFunction("TermsOfUse");

				}
				
			} else {
				Alert.alert("Wrong Credentials", "No user found. Verify your credentials.");

			}

		}

	}

	private buildComponent() {
		let component = (
			<View style={[Styles.formModal, Styles.shadow]}>
				<Text style={Styles.title}>Welcome!</Text>
				<View>
					<FolconnInput placeholder="Username" type="username" ejectFunction={this.receiveTypedUserName} secureText={false}/>
					<FolconnInput placeholder="Password" type="password" ejectFunction={this.receiveTypedPassword} secureText={true}/>
					<FolconnButton size="small" text="Log in" onClick={this.submitLoginForm}/>
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
