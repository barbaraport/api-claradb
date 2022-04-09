import React, { Component } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../enumerations/Colors";
import { Styles } from "../assets/styles/Styles";

interface HomePageProps {
	pageRedirectFunction: Function;

}

export class HomePage extends Component<HomePageProps, any> {
	constructor(props: HomePageProps) {
		super(props);



	}


	private buildComponent() {
		let component = (
			<View style={Styles.content}>
				<Text style={Styles.textWhite}>Home Page</Text>
				<Text style={Styles.textWhite}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pellentesque justo tincidunt maximus. Pellentesque auctor massa et odio gravida, et faucibus nibh auctor. Nulla accumsan urna a bibendum scelerisque. Donec ut rutrum turpis. Quisque at augue nunc. Donec semper felis eu risus accumsan, vitae luctus lacus ultricies. Donec sit amet finibus purus. Nam mollis odio sit amet mauris vestibulum, eu tincidunt erat posuere. Phasellus egestas diam enim, tristique viverra eros ornare at. Nulla nec ultricies elit. Integer non tempor arcu, et laoreet odio.

					Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ac sagittis risus. Integer egestas, neque vitae luctus fermentum, purus lacus fringilla augue, in rutrum lectus mauris ut lectus. Mauris quis nibh vel tortor maximus dapibus vel sit amet nisl. Ut sagittis efficitur ligula sit amet tempus. Curabitur ac porttitor quam. Morbi luctus in leo a euismod.

					In semper, lacus eget ultricies consectetur, justo ipsum cursus dui, ut fringilla sem lorem sed leo. Maecenas porta augue tortor, sed molestie enim porttitor non. Aliquam erat volutpat. Nunc pulvinar risus ut dui facilisis, et sollicitudin odio volutpat. Ut lacinia, nisi ac venenatis ultrices, ante ipsum varius est, ac consectetur justo sem in ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer fringilla tortor at lorem efficitur dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non neque nec quam aliquet pellentesque in vulputate dui. Donec at laoreet tellus. Nullam mollis lorem lacus, quis auctor eros blandit vel. Nunc ac velit nunc. Curabitur lorem massa, feugiat vel purus in, dapibus luctus lectus. Nunc venenatis, felis malesuada pretium cursus, tellus tellus suscipit enim, id pharetra justo sapien eu eros. Duis quis bibendum augue, quis euismod purus.

					Donec sed risus eget turpis lacinia sollicitudin id id erat. Donec dui nibh, fermentum sit amet fermentum sed, varius ut erat. Fusce quis posuere risus. Proin quis justo sed sapien laoreet ultricies sed sed purus. Fusce sollicitudin purus nisi, eget vehicula enim lacinia et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris elementum a nunc id bibendum. Cras non urna velit. Donec non metus libero.

					Nulla facilisi. Nulla facilisi. Curabitur odio libero, suscipit sit amet magna sed, consequat laoreet metus. Integer sagittis malesuada orci, sed laoreet sem elementum sed. Maecenas eu imperdiet eros. Proin facilisis at nisi a laoreet. Duis metus dui, congue vel porta in, consequat quis turpis. Nam rutrum ex sit amet enim luctus, ut porttitor metus volutpat. Donec in lacus sit amet arcu efficitur feugiat. Praesent ac tortor semper, vestibulum lacus ac, malesuada dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut feugiat nulla vel nunc bibendum, ac dapibus est lacinia.
				</Text>
			</View>
		);

		return component;
	}

	render() {
		const component = this.buildComponent();

		return component;
	}

}