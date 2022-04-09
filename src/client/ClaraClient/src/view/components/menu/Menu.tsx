import React, { Component } from "react";
import { TouchableHighlight, View } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { PageAliases } from '../../../enumerations/PageAliases';
import { Sizes } from "../../../enumerations/Sizes";
import { Styles } from "../../assets/styles/Styles";
import { FolConnIcon } from '../icon/FolConnIcon';
import { MenuItem } from './MenuItem';

interface MenuProps {
     pageRedirectFunction: Function;
}

interface MenuState {
     showMenu: boolean;
}

export class Menu extends Component<MenuProps, MenuState> {

     constructor(props: MenuProps) {
          super(props);

          this.state = {
               showMenu: false,
          };
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
                         <TouchableHighlight onPress={() => { this.signOut() }}>
                              <MenuItem iconName="sign-out-alt" itemName="Sign Out"></MenuItem>
                         </TouchableHighlight>
                    </View>
               </View>
          );
     }

     private buildMenuComponent() {
          let menu = (
               <View style={Styles.menu}>
                    <TouchableHighlight onPress={() => { this.handleMenu() }}>
                         <FolConnIcon iconName="bars" iconSize={Sizes.BIGICON} iconColor={Colors.SECONDARY_BLUE} ></FolConnIcon>
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

     private signOut() {
          this.handleScreen(PageAliases.LOGIN);
     }

     private handleScreen(newScreen: PageAliases) {
          this.openSelectedScreen(newScreen);
     }

     private openSelectedScreen(newScreen: PageAliases) {
          this.props.pageRedirectFunction(newScreen);
     }

     private handleMenu() {
          this.setState({ showMenu: !this.state.showMenu });
     }
}