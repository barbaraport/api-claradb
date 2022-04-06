import { MaterialIcons } from '@expo/vector-icons';
import React, { Component } from "react";
import { Alert, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { PageAliases } from '../../../enumerations/PageAliases';
import { Sizes } from "../../../enumerations/Sizes";

interface Props {

}

interface State {
     showMenu: boolean;
     screenToOpen: string
}

export class Menu extends Component<Props, State> {

     constructor(props: Props) {
          super(props)

          this.state = {
               showMenu: false,
               screenToOpen: "Home"
          }
     }

     private handleScreen(newScreen: string) {
          this.setState({ screenToOpen: newScreen });
     }

     private openSelectedScreen() {
          Alert.alert("Changing screen", "Changing to: " + this.state.screenToOpen);
     }

     private buildMenu() {
          return (
               <View style={styles.menuContainer}>
                    <View>
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.HOME) }}>
                              <View style={styles.menuItem}>
                                   <MaterialIcons name="home" size={Sizes.ICON} color={Colors.BLACK} />
                                   <Text style={styles.text}>Home</Text>
                              </View>
                         </TouchableHighlight>
                    </View>
                    <View>
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.CARS) }}>
                              <View style={styles.menuItem}>
                                   <MaterialIcons name="directions-car" size={Sizes.ICON} color={Colors.BLACK} />
                                   <Text style={styles.text}>Cars</Text>
                              </View>
                         </TouchableHighlight>
                    </View>
                    <View>
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.FOLS) }}>
                              <View style={styles.menuItem}>
                                   <MaterialIcons name="insert-drive-file" size={Sizes.ICON} color={Colors.BLACK} />
                                   <Text style={styles.text}>FOLs</Text>
                              </View>
                         </TouchableHighlight>
                    </View>
                    <View>
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.TERMSOFUSE) }}>
                              <View style={styles.menuItem}>
                                   <MaterialIcons name="check-box" size={Sizes.ICON} color={Colors.BLACK} />
                                   <Text style={styles.text}>Terms Of Use</Text>
                              </View>
                         </TouchableHighlight>
                    </View>
                    <View>
                         <TouchableHighlight onPress={() => { this.handleScreen(PageAliases.LOGOUT) }}>
                              <View style={styles.menuItem}>
                                   <MaterialIcons name="logout" size={Sizes.ICON} color={Colors.BLACK} />
                                   <Text style={styles.text}>Log out</Text>
                              </View>
                         </TouchableHighlight>
                    </View>
               </View>
          );
     }


     private handleMenu() {
          this.setState({ showMenu: !this.state.showMenu });
     }

     private buildMenuComponent() {
          let menu = (
               <View>
                    <TouchableHighlight onPress={() => { this.handleMenu() }}>
                         <View>
                              <MaterialIcons name="menu" size={Sizes.ICON} color={Colors.BLACK} />
                         </View>
                    </TouchableHighlight>
                    {
                         this.state.showMenu == true
                              ? this.buildMenu()
                              : null
                    }
               </View>

          );

          return menu;
     }

     render() {
          let component = this.buildMenuComponent();
          return component;
     }
}

const styles = StyleSheet.create({
     menuItem: {
          flexDirection: "row",
          marginTop: 5,
          marginBottom: 5,
          paddingRight: 5
     },
     menuContainer: {
          backgroundColor: Colors.WHITE,
          borderRadius: 10,
          alignSelf: "flex-start",
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginLeft: 5,

     },
     text: {
          paddingLeft: 5,
          fontSize: 20
     }
});