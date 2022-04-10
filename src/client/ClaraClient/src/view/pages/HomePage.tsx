import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { Alert, ImageBackground, Text, View } from "react-native";
import { Colors } from "../../enumerations/Colors";
import { Styles } from "../assets/styles/Styles";
import { FolconnButton } from "../components/button/FolconnButton";

interface HomePageProps {
	pageRedirectFunction: Function;

}

export class HomePage extends Component<HomePageProps, any> {
	constructor(props: HomePageProps) {
		super(props);

		this.openFolsScreen = this.openFolsScreen.bind(this);
		this.openCarDetailsScreen = this.openCarDetailsScreen.bind(this);

	}

	private openCarDetailsScreen(){
		Alert.alert("Abrindo página de detalhes");
		
	}
	
	private openFolsScreen(){
		Alert.alert("Abrindo página de FOLs");

	}

	private buildComponent() {
		let component = (
			<View style={Styles.content}>
				<ImageBackground source={require("../assets/imgs/phoneUser.jpg")} blurRadius={2} style={{width: "100%", height: "100%", position: "absolute", opacity: 0.7}}/>
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
