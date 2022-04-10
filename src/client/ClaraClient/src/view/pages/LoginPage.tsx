import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { Text } from "react-native";
import { LoginForm } from "../components/LoginForm";
import { Styles } from "../styles/Styles";

interface LoginPageProps {
	pageRedirectFunction: Function;
}

export class LoginPage extends Component<LoginPageProps, any> {
	constructor(props: LoginPageProps) {
		super(props);
	}

	private buildComponent() {
		let component = (
			<>
				<LinearGradient
					colors={["#526ac4", "#b0b8d4", "#526ac4"]}
					style={Styles.background}
				>
					<Text style={Styles.titleWhite}>FolConn</Text>
					<Text style={Styles.label}>
						Get notified and read FOLs instantly!
					</Text>
					<LoginForm
						redirectPageFunction={this.props.pageRedirectFunction}
					/>
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
