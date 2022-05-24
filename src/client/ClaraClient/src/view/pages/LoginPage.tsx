import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { Text } from "react-native";
import { Colors } from "../../enumerations/Colors";
import { Styles } from "../assets/styles/Styles";
import { LoginForm } from "../components/loginForm/LoginForm";

interface LoginPageProps {
	pageRedirectFunction: Function,
	setUserIDFunction: Function,
	setPhoneTokenFunction: Function,
}

export class LoginPage extends Component<LoginPageProps, any> {
	constructor(props: LoginPageProps) {
		super(props);
	}

	private buildComponent() {
		let component = (
			<>
				<LinearGradient colors={[Colors.GRADIENT_1, Colors.GRADIENT_2, Colors.GRADIENT_3]} style={Styles.background}>
					<Text style={Styles.titleWhite}>FolConn</Text>
					<Text style={Styles.label}>
						Get notified and read FOLs instantly!
					</Text>
					<LoginForm redirectPageFunction={this.props.pageRedirectFunction} setPhoneTokenFunction={this.props.setPhoneTokenFunction} setUserIDFunction={this.props.setUserIDFunction} />
				</LinearGradient>
			</>
		);

		return component;
	}

	render() {
		const component = this.buildComponent();

		return component;
	}
}
