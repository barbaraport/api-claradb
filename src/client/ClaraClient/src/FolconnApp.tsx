import { registerRootComponent } from "expo";
import React, { Component } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { PageAliases } from "./enumerations/PageAliases";
import { HomePage } from "./view/pages/HomePage";
import { LoginPage } from "./view/pages/LoginPage";
import { FOLsPage } from "./view/pages/FOLsPage";
import { Styles } from "./view/styles/Styles";
import { TermsOfUsePage } from "./view/pages/TermsOfUsePage";

interface FolconnAppState {
	currentPage: PageAliases;
	pageHistory: Array<PageAliases>;
}

export class FolconnApp extends Component<any, FolconnAppState> {
	constructor(props: any) {
		super(props);

		this.state = {
			currentPage: PageAliases.LOGIN,
			pageHistory: [PageAliases.LOGIN],
		};

		this.changeCurrentPage = this.changeCurrentPage.bind(this);
		this.goBack = this.goBack.bind(this);
		this.getPageToRender = this.getPageToRender.bind(this);
	}

	private changeCurrentPage(pageToChange: PageAliases) {
		let pageHistoryMock: Array<PageAliases> = this.state["pageHistory"];
		pageHistoryMock.push(pageToChange);
		this.setState({
			currentPage: pageToChange,
			pageHistory: pageHistoryMock,
		});
	}

	private getPageToRender(): JSX.Element {
		const loginPage: JSX.Element = (
			<LoginPage pageRedirectFunction={this.changeCurrentPage} />
		);

		const homePage: JSX.Element = (
			<HomePage pageRedirectFunction={this.changeCurrentPage} />
		);

		const folsPage: JSX.Element = (
			<FOLsPage pageRedirectFunction={this.changeCurrentPage}/>
		);

		const termsOfUsePage: JSX.Element = (
			<TermsOfUsePage pageRedirectFunction={this.changeCurrentPage}/>
		);

		switch (this.state["currentPage"]) {
			case PageAliases.HOME:
				return homePage;

			case PageAliases.LOGIN:
				return loginPage;

			case PageAliases.FOLS:
				return folsPage;

			case PageAliases.TERMSOFUSE:
				return termsOfUsePage;

			default:
				return homePage;
		}
	}

	private goBack() {
		let pageHistoryMock: Array<PageAliases> = this.state["pageHistory"];
		pageHistoryMock.pop();
		const lastPage = pageHistoryMock[pageHistoryMock.length - 1];
		this.setState({ pageHistory: pageHistoryMock, currentPage: lastPage });
	}

	private buildComponent() {
		let component = (
			<SafeAreaView>
				<StatusBar barStyle={"light-content"} />
				<View style={Styles.screen}>{this.getPageToRender()}</View>
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
