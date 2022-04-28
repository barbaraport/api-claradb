import React, { Component } from "react";
import { Alert, ImageBackground, Text, View } from "react-native";
import { Colors } from "../../enumerations/Colors";
import { PageAliases } from "../../enumerations/PageAliases";
import { Styles } from "../assets/styles/Styles";
import { FolconnButton } from "../components/button/FolconnButton";

interface HomePageProps {
	pageRedirectFunction: Function,
	userID: string;
}

export class HomePage extends Component<HomePageProps, any> {
	constructor(props: HomePageProps) {
		super(props);

		this.openFolsScreen = this.openFolsScreen.bind(this);
		this.openCarDetailsScreen = this.openCarDetailsScreen.bind(this);
	}

	private openCarDetailsScreen(){
		Alert.alert("Oops!", "The car details screen is under development!", [{text: 'Ok!'}]);
	}

	private openFolsScreen(){
		this.props.pageRedirectFunction(PageAliases.FOLS);
	}

	private buildComponent() {
		let component = (
			<View style={Styles.content}>
				<ImageBackground 
					source={require("../assets/imgs/phoneUser.jpg")} blurRadius={2} 
					style={Styles.homeBackground}
					resizeMode="cover" imageStyle={{opacity: 0.8}}
				/>
				<View style={{marginTop: 150}}>
					<Text style={{fontSize: 24, color: Colors.WHITE}}>What do you wish to see first?</Text>
				</View>
				<View style={{marginTop: 50, height: 200, display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
					<FolconnButton size="large" text="Car details" onClick={this.openCarDetailsScreen}></FolconnButton>
					<FolconnButton size="large" text="FOLs" onClick={this.openFolsScreen}></FolconnButton>
				</View>
			</View>
		);

		return component;
	}

	render() {
		const component = this.buildComponent();

		return component;
	}
}
