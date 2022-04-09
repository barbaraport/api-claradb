import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { Sizes } from "../../../enumerations/Sizes";
import { Styles } from "../../assets/styles/Styles";
import { FolConnIcon } from '../icon/FolConnIcon';
import { Menu } from './Menu';

interface HeaderProps {
     pageRedirectFunction: Function;
     goBack: Function;
}

interface HeaderState {
     showHeader: boolean;

}

const styles = StyleSheet.create({
     headerContainer: {
          backgroundColor: Colors.SECONDARY_BLUE,
          height: 120
     }
});

export class FolconnHeader extends Component<HeaderProps, HeaderState> {

     constructor(props: HeaderProps) {
          super(props)

          this.state = {
               showHeader: false,
          }
     }

     private buildHeaderComponent() {
          let header = (
               <View style={styles.headerContainer}>
                    <Menu pageRedirectFunction={this.props.pageRedirectFunction}/>
               </View>
          );

          return header;
     }

     render() {
          let component = this.buildHeaderComponent();
          return component;
     }
}