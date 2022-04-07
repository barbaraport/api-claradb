import React, { Component } from "react";
import { Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import { FolConnIcon } from "../icon/FolConnIcon";

interface MenuItemProps {
     iconName: string,
     itemName: string
}

interface MenuItemState { }

export class MenuItem extends Component<MenuItemProps, MenuItemState> {

     private buildMenuItemComponent() {
          return (
               <View style={Styles.menuItem}>
                    <FolConnIcon iconName={this.props.iconName}></FolConnIcon>
                    <Text style={Styles.text}>{this.props.itemName}</Text>
               </View>
          );
     }

     render() {
          let component = this.buildMenuItemComponent();
          return component;
     }
}