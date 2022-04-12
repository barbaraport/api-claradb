import React, { Component } from "react";
import { GestureResponderEvent, Modal, TouchableHighlight, TouchableOpacity, View } from "react-native";
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

          this.close = this.close.bind(this);
          this.redirectToHome = this.redirectToHome.bind(this);
          this.redirectToLogin = this.redirectToLogin.bind(this);
          this.redirectFols = this.redirectFols.bind(this);
          this.redirectToTermsOfUse = this.redirectToTermsOfUse.bind(this);

     }

     private redirectToHome() {
          this.props.pageRedirectFunction(PageAliases.HOME);

     }
     private redirectToLogin() {
          this.props.pageRedirectFunction(PageAliases.LOGIN);

     }
     private redirectFols() {
          this.props.pageRedirectFunction(PageAliases.FOLS);

     }
     private redirectToTermsOfUse() {
          this.props.pageRedirectFunction(PageAliases.TERMS_OF_USE);

     }

     private buildMenu() {
          return (
               <Modal visible={this.state["showMenu"]} transparent={true} onRequestClose={() => this.setState({ showMenu: false })}>
                    <TouchableHighlight activeOpacity={1} onPressIn={this.close} style={{ height: "100%" }}>
                         <View style={{ alignSelf: "flex-start", marginTop: 50, marginLeft: 20, padding: 15, borderRadius: 16, backgroundColor: Colors.WHITE }}>
                              <MenuItem itemAction={this.redirectToHome} iconName="home" itemName="Home"></MenuItem>
                              <MenuItem itemAction={this.redirectFols} iconName="file-medical-alt" itemName="FOLs"></MenuItem>
                              <MenuItem itemAction={this.redirectToTermsOfUse} iconName="user-check" itemName="Terms of Use"></MenuItem>
                              <MenuItem itemAction={this.redirectToLogin} iconName="sign-out-alt" itemName="Sign Out"></MenuItem>
                         </View>
                    </TouchableHighlight>
               </Modal>
          );
     }

     private close(event: GestureResponderEvent) {
          this.setState({ showMenu: false });
     }

     private buildMenuComponent() {
          let menu = (
               <View style={Styles.menu}>
                    <TouchableHighlight activeOpacity={1} underlayColor={Colors.BLUE} onPress={() => { this.handleMenu() }}>
                         <FolConnIcon iconName="bars" iconSize={Sizes.BIGICON} iconColor={Colors.SECONDARY_BLUE}></FolConnIcon>
                    </TouchableHighlight>
                    {this.buildMenu()}
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