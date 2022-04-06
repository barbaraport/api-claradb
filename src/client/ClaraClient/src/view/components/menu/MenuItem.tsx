import React, { Component } from "react";
import { View, Text } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { MaterialIcons } from '@expo/vector-icons';
import { Sizes } from "../../../enumerations/Sizes";
import { Styles } from "../../styles/Styles";

interface MenuItemProps {
     iconName: string,
     itemName: string
}

interface MenuItemState { }

export class MenuItem extends Component<MenuItemProps, MenuItemState> {

     private buildMenuItemComponent() {
          return (
               <View style={Styles.menuItem}>
                    <MaterialIcons name={this.props.iconName} size={Sizes.ICON} color={Colors.BLACK} />
                    <Text style={Styles.text}>{this.props.itemName}</Text>
               </View>
          );
     }

     render() {
          let component = this.buildMenuItemComponent();
          return component;
     }
}