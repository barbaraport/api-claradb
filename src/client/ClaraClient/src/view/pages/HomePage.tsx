import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../enumerations/Colors";
import { Styles } from "../assets/styles/Styles";
import { FolconnButton } from "../components/button/FolconnButton";

interface HomePageProps {
	pageRedirectFunction: Function;

}

export class HomePage extends Component<HomePageProps, any> {
	constructor(props: HomePageProps) {
		super(props);



	}

	private openCarDetailsScreen(){

	}

	private openFolsScreen(){

	}


	private buildComponent() {
		let component = (
			<View style={Styles.content}>
				<LinearGradient
					colors={[Colors.GRADIENT_1, Colors.GRADIENT_2, Colors.GRADIENT_3]} 
					style={Styles.background}>
					<View style={{marginTop: 100}}>
						<Text style={{fontSize: 24, color: Colors.WHITE}}>What do you wish to see first?</Text>
					</View>
					<View style={{marginTop: 50, height: 200, display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
						<FolconnButton size="large" text="Car details" onClick={this.openCarDetailsScreen}></FolconnButton>
						<FolconnButton size="large" text="FOLs" onClick={this.openFolsScreen}></FolconnButton>
					</View>
				</LinearGradient>
			</View>
		);

		return component;
	}

	render() {
		const component = this.buildComponent();

		return component;
	}

}