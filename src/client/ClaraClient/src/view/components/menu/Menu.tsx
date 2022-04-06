import { MaterialIcons } from '@expo/vector-icons';
import React, { Component } from "react";
import { Alert, Text, TouchableHighlight, View } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { PageAliases } from '../../../enumerations/PageAliases';
import { Sizes } from "../../../enumerations/Sizes";
import { Styles } from "../../styles/Styles";
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
                              <MenuItem iconName="clipboard-check" itemName="Terms of Use"></MenuItem>
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
                         <View>
                              <MaterialIcons name="menu" size={Sizes.ICON} color={Colors.BLACK} />
                         </View>
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