import messaging, { FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import { registerRootComponent } from "expo";
import React, { Component } from "react";
import { Alert, SafeAreaView, StatusBar, View } from "react-native";
import { PageAliases } from "./enumerations/PageAliases";
import { NotificationService } from "./services/NotificationSerivce";
import { Styles } from "./view/assets/styles/Styles";
import { FolconnHeader } from "./view/components/menu/FolconnHeader";
import { FolPage } from "./view/pages/FOLsPage";
import { HomePage } from "./view/pages/HomePage";
import { LoginPage } from "./view/pages/LoginPage";
import { TermsOfUsePage } from "./view/pages/TermsOfUsePage";

interface FolconnAppState {
	currentPage: PageAliases;
	pageHistory: Array<PageAliases>;
	userID: string;

	notificationMessage: FirebaseMessagingTypes.RemoteMessage;
}

export class FolconnApp extends Component<any, FolconnAppState> {
	constructor(props: any) {
		super(props);

		this.state = {
			currentPage: PageAliases.LOGIN,
			pageHistory: [PageAliases.LOGIN],
			userID: "",

			notificationMessage: {}
		};

		this.goBack = this.goBack.bind(this);
		this.setUserId = this.setUserId.bind(this);
		this.getPageToRender = this.getPageToRender.bind(this);
		this.changeCurrentPage = this.changeCurrentPage.bind(this);
		this.saveToken = this.saveToken.bind(this);
		this.getMessage = this.getMessage.bind(this);
		this.verifyNotifications = this.verifyNotifications.bind(this);
	}

	componentDidMount() {
		this.verifyNotifications();
	}

	private saveToken (token: string, userId: string) {
		NotificationService.persistToken(token, userId);
	}

	private getMessage(message: FirebaseMessagingTypes.RemoteMessage) {
		this.setState({notificationMessage: message});
		Alert.alert("New message", JSON.stringify(this.state.notificationMessage.data));
	}

	private verifyNotifications() {
		messaging().onMessage(this.getMessage);
	}

	private setUserId(userID: string) {
		this.setState({ userID: userID });
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
		const homePage: JSX.Element = (
			<>
				<FolconnHeader pageRedirectFunction={this.changeCurrentPage} goBack={this.goBack}></FolconnHeader>
				<HomePage pageRedirectFunction={this.changeCurrentPage} userID={this.state["userID"]} />
			</>
		);

		const loginPage: JSX.Element = (
			<LoginPage pageRedirectFunction={this.changeCurrentPage} setUserIDFunction={this.setUserId} setPhoneTokenFunction={this.saveToken} />
		);

		const folsPage: JSX.Element = (
			<>
				<FolconnHeader pageRedirectFunction={this.changeCurrentPage} goBack={this.goBack}></FolconnHeader>
				<FolPage pageRedirectFunction={this.changeCurrentPage} userID={this.state["userID"]} />
			</>
		);

		const termsOfUsePage: JSX.Element = (
			<>
				<FolconnHeader pageRedirectFunction={this.changeCurrentPage} goBack={this.goBack}></FolconnHeader>
				<TermsOfUsePage pageRedirectFunction={this.changeCurrentPage} userID={this.state["userID"]} />
			</>
		);

		switch (this.state["currentPage"]) {
			case PageAliases.HOME:
				return homePage;

			case PageAliases.LOGIN:
				return loginPage;

			case PageAliases.FOLS:
				return folsPage;

			case PageAliases.TERMS_OF_USE:
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
				<View style={Styles.screen}>
					{this.getPageToRender()}
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