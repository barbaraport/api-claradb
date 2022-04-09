import React, { Component } from "react";
import { ImageBackground, Text, TouchableHighlight, View } from "react-native";
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

export class FolconnHeader extends Component<HeaderProps, HeaderState> {

     constructor(props: HeaderProps) {
          super(props)

          this.state = {
               showHeader: false,
          }
     }

     private buildHeaderComponent() {
          let header = (
               <View>
                    <ImageBackground source={require("../../assets/imgs/header.png")} style={Styles.imageBackground}>
                         <View style={Styles.headerAlignment}>
                              <View style={Styles.icons} >
                                   <Menu pageRedirectFunction={this.props.pageRedirectFunction} />
                              </View>
                              <View style = {Styles.fixed}>
                                   <Text style={Styles.headerTitle}>FolConn</Text>
                              </View>
                              <View style = {Styles.icons}>
                                   <View>
                                        <TouchableHighlight onPress={() => this.props.goBack()}>
                                             <FolConnIcon iconName='arrow-left' iconSize={Sizes.ICON} iconColor={Colors.SECONDARY_BLUE} />
                                        </TouchableHighlight>
                                   </View>
                                   <View>
                                        <TouchableHighlight>
                                             <FolConnIcon iconName='bell' iconSize={Sizes.ICON} iconColor={Colors.SECONDARY_BLUE} />
                                        </TouchableHighlight>
                                   </View>
                              </View>
                         </View>
                    </ImageBackground>

               </View>

          );

          return header;
     }

     render() {
          let component = this.buildHeaderComponent();
          return component;
     }
}