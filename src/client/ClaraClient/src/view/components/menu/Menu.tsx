import React, { Component } from "react";
import { Alert, TouchableHighlight, View } from "react-native";
import { PageAliases } from '../../../enumerations/PageAliases';
import { Styles } from "../../styles/Styles";
import { FolConnIcon } from '../icon/FolConnIcon';
import { MenuItem } from './MenuItem';

interface MenuProps { }

interface MenuState {
     showMenu: boolean;
}

export class Menu extends Component<MenuProps, MenuState> {

     constructor(props: MenuProps) {
          super(props)

          this.state = {
               showMenu: false,
          }
     }

     private handleScreen(newScreen: string) {
          this.openSelectedScreen(newScreen);
     }

	private handleScreen(newScreen: PageAliases) {
		this.openSelectedScreen(newScreen);
	}

     private buildMenu() {
          return (
               <View style={[Styles.menuContainer, Styles.shadow]}>
                    <View>
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.HOME) }}>
                              <MenuItem iconName="home" itemName="Home"></MenuItem>
                         </TouchableHighlight>
                    </View>
                    <View>
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.FOLS) }}>
                              <MenuItem iconName="file-medical-alt" itemName="FOLs"></MenuItem>
                         </TouchableHighlight>
                    </View>
                    <View>
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.TERMSOFUSE) }}>
                              <MenuItem iconName="user-check" itemName="Terms of Use"></MenuItem>
                         </TouchableHighlight>
                    </View>
                    <View>
                         <TouchableHighlight onPress={() => { this.handleScreen("SignOut") }}>
                              <MenuItem iconName="sign-out-alt" itemName="Sign Out"></MenuItem>
                         </TouchableHighlight>
                    </View>
               </View>
          );
     }

	private buildMenu() {
		return (
			<View style={[Styles.menuContainer, Styles.shadow]}>
				<View>
					<TouchableHighlight
						onPress={() => {
							this.handleScreen(PageAliases.HOME);
						}}
					>
						<View style={Styles.menuItem}>
							<MaterialIcons
								name="home"
								size={Sizes.ICON}
								color={Colors.BLACK}
							/>
							<Text style={Styles.text}>Home</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View>
					<TouchableHighlight
						onPress={() => {
							this.handleScreen(PageAliases.CARS);
						}}
					>
						<View style={Styles.menuItem}>
							<MaterialIcons
								name="directions-car"
								size={Sizes.ICON}
								color={Colors.BLACK}
							/>
							<Text style={Styles.text}>Cars</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View>
					<TouchableHighlight
						onPress={() => {
							this.handleScreen(PageAliases.FOLS);
						}}
					>
						<View style={Styles.menuItem}>
							<MaterialIcons
								name="insert-drive-file"
								size={Sizes.ICON}
								color={Colors.BLACK}
							/>
							<Text style={Styles.text}>FOLs</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View>
					<TouchableHighlight
						onPress={() => {
							this.handleScreen(PageAliases.TERMSOFUSE);
						}}
					>
						<View style={Styles.menuItem}>
							<MaterialIcons
								name="check-box"
								size={Sizes.ICON}
								color={Colors.BLACK}
							/>
							<Text style={Styles.text}>Terms Of Use</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View>
					<TouchableHighlight
						onPress={() => {
							this.handleScreen(PageAliases.LOGOUT);
						}}
					>
						<View style={Styles.menuItem}>
							<MaterialIcons
								name="logout"
								size={Sizes.ICON}
								color={Colors.BLACK}
							/>
							<Text style={Styles.text}>Log out</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	}

	private handleMenu() {
		this.setState({ showMenu: !this.state.showMenu });
	}

     private buildMenuComponent() {
          let menu = (
               <View>
                    <TouchableHighlight onPress={() => { this.handleMenu() }}>
                         <FolConnIcon iconName="bars" ></FolConnIcon>
                    </TouchableHighlight>
                    {
                         this.state.showMenu == true
                              ? this.buildMenu()
                              : null
                    }
               </View>

		return menu;
	}

	render() {
		let component = this.buildMenuComponent();
		return component;
	}
}
