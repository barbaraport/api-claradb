import React, { Component } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Sizes } from "../../../enumerations/Sizes";
import { FontAwesome5  } from '@expo/vector-icons';

interface FolConnIconProps { 
     iconName: string
}

interface FolConnIconState { }

export class FolConnIcon extends Component<FolConnIconProps, FolConnIconState> {

     private buildFolconnIcon () {
         return <FontAwesome5 name={this.props.iconName} size={Sizes.ICON} color={Colors.BLACK} />;
     }

     render () {
          return this.buildFolconnIcon();
     }
}