import React, { Component } from "react";
import { Platform, StatusBar, View } from "react-native";
import { Colors } from "../../../enumerations/Colors";

interface FolConnStatusBarProps { }
interface FolConnStatusBarState { }

export class FolConnStatusBar extends Component<FolConnStatusBarProps, FolConnStatusBarState>{

     private STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 5;

     render(): React.ReactNode {
          return (
               <View style={{height: this.STATUSBAR_HEIGHT, backgroundColor: Colors.PRIMARY_BLUE}}>
                    <StatusBar backgroundColor={Colors.PRIMARY_BLUE} barStyle="light-content"/>
               </View>
          );
     }
}