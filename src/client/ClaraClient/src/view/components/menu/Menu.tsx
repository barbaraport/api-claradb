import React, { Component } from "react";
import { Alert, TouchableHighlight, View } from "react-native";
import { PageAliases } from '../../../enumerations/PageAliases';
import { Styles } from "../../styles/Styles";
import { FolConnIcon } from '../icon/FolConnIcon';
import { MenuItem } from './MenuItem';

interface Props {

}

interface State {
     showMenu: boolean;
}

export class Menu extends Component<Props, State> {

     constructor(props: Props) {
          super(props)

          this.state = {
               showMenu: false,
          }
     }

     private handleScreen(newScreen: string) {
          this.openSelectedScreen(newScreen);
     }

     private openSelectedScreen(newScreen: string) {
          Alert.alert("Changing screen", "Changing to: " + newScreen);
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
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.CARS) }}>
                              <MenuItem iconName="car" itemName="Cars"></MenuItem>
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
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.LOGOUT) }}>
                              <MenuItem iconName="sign-out-alt" itemName="Sign Out"></MenuItem>
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

          );

          return menu;
     }

     render() {
          let component = this.buildMenuComponent();
          return component;
     }
}