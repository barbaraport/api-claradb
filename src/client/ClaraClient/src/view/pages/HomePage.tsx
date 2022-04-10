import React, { Component } from "react";
import { View } from "react-native";
import { Menu } from "../components/menu/Menu";

interface HomePageProps {
	pageRedirectFunction: Function;
}

export class HomePage extends Component<HomePageProps, any> {
	constructor(props: HomePageProps) {
		super(props);
	}

	private buildComponent() {
		let component = (
			<View>
				<Menu></Menu>
			</View>
		);

		return component;
	}

	render() {
		const component = this.buildComponent();

		return component;
	}
}
