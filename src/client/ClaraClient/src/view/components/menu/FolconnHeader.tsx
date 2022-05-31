import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
          elevation: 1
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
                    <ImageBackground source={require("../../assets/imgs/header.png")} style={Styles.imageBackground}/>
                    <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
                         <Menu pageRedirectFunction={this.props.pageRedirectFunction}/>
                         <Text style={[Styles.headerTitle]}>FolConn</Text>
                         <View style={{display: "flex", flexDirection: "row"}}>
                              <View>
                                   <TouchableOpacity activeOpacity={0.2} onPress={() => this.props.goBack()}>
                                        <FolConnIcon iconName='arrow-left' iconSize={Sizes.ICON} iconColor={Colors.SECONDARY_BLUE} />
                                   </TouchableOpacity>
                              </View>
                         </View>
                    </View>
               </View>
          );

          return header;
     }

     render() {
          let component = this.buildHeaderComponent();
          return component;
     }
}