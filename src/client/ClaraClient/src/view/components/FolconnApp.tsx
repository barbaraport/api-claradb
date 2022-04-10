import { registerRootComponent } from "expo";
import React, { Component } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { PageAliases } from "../../enumerations/PageAliases";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { FolPage } from "../pages/FolPage";
import { Styles } from "../styles/Styles";

interface FolconnAppState {
	currentPage: PageAliases;
}

export class FolconnApp extends Component<any, FolconnAppState> {
	constructor(props: any) {
		super(props);

		this.state = {
			currentPage: PageAliases.LOGIN,
		};

		this.changeCurrentPage = this.changeCurrentPage.bind(this);
	}

	private changeCurrentPage(pageToChange: PageAliases) {
		this.setState({ currentPage: pageToChange });
	}

	private buildComponent() {
		let component = (
			<SafeAreaView>
				<StatusBar barStyle={"light-content"} />
				<View style={Styles.screen}>
					<FolPage pageRedirectFunction={this.changeCurrentPage} />
				</View>
			</SafeAreaView>
		);

		return component;
	}

	render() {
		let component = this.buildComponent();

		return component;
	}
}

registerRootComponent(FolconnApp);
