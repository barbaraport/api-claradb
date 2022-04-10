import React, { Component } from "react";
import { Alert, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { Sizes } from "../../../enumerations/Sizes";
import { Styles } from "../../assets/styles/Styles";
import { FolConnIcon } from "../icon/FolConnIcon";

interface MenuItemProps {
     iconName: string,
     itemName: string,
     itemAction: Function
}

interface MenuItemState { }

export class MenuItem extends Component<MenuItemProps, MenuItemState> {
     constructor(props: MenuItemProps) {
          super(props);

          this.onClick = this.onClick.bind(this);
          
     }

     private onClick(){
          this.props.itemAction();

     }

     private buildMenuItemComponent() {
          return (
               <TouchableOpacity onPress={this.onClick} activeOpacity={0.2}>
                    <View style={Styles.menuItem}>
                         <FolConnIcon iconName={this.props.iconName} iconSize={Sizes.ICON} iconColor={Colors.BLACK}></FolConnIcon>
                         <Text style={Styles.textBlack}>{this.props.itemName}</Text>
                    </View>
             </TouchableOpacity>
          );
     }

     render() {
          let component = this.buildMenuItemComponent();
          return component;
     }
}