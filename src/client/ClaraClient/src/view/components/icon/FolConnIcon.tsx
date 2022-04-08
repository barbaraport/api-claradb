import React, { Component } from "react";
import { Sizes } from "../../../enumerations/Sizes";
import { FontAwesome5  } from '@expo/vector-icons';
import { Colors } from "../../../enumerations/Colors";

interface FolConnIconProps {
     iconName: string
     iconColor: Colors;
     iconSize:Sizes;
}

interface FolConnIconState { }

export class FolConnIcon extends Component<FolConnIconProps, FolConnIconState> {

     private buildFolconnIcon () {
         return <FontAwesome5 name={this.props.iconName} size={this.props.iconSize} color={this.props.iconColor} />;
     }

     render () {
          return this.buildFolconnIcon();
     }
}