import { MaterialIcons } from '@expo/vector-icons';
import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { Sizes } from "../../../enumerations/Sizes";

interface Props {

}

interface State {
     showMenu: boolean;
}

export class Menu extends Component<Props, State> {

     private buildMenu() {
          if (this.state.showMenu === true) {
               return (
                    <View>
                    </View>
               );
          }
     }

     private handleMenu() {
          if (this.state.showMenu === true) {
               this.setState({ showMenu: false });
          }
          else {
               this.setState({ showMenu: true });
          }
     }

     private buildMenuComponent() {
          let menu = (
               <View>
                    <TouchableHighlight onPress={() => { this.handleMenu }}>
                         <View>
                              <MaterialIcons name="menu" size={Sizes.ICON} color={Colors.BLACK} />
                         </View>
                    </TouchableHighlight>
                    {/*this.buildMenu*/}
                    <View style={styles.menuContainer}>
                         <View style={styles.menuItem}>
                              <MaterialIcons name="home" size={Sizes.ICON} color={Colors.BLACK} />
                              <Text>Home</Text>
                         </View>
                         <View style={styles.menuItem}>
                              <MaterialIcons name="directions-car" size={Sizes.ICON} color={Colors.BLACK} />
                              <Text>Cars</Text>
                         </View>
                         <View style={styles.menuItem}>
                              <MaterialIcons name="insert-drive-file" size={Sizes.ICON} color={Colors.BLACK} />
                              <Text>FOLs</Text>
                         </View>
                         <View style={styles.menuItem}>
                              <MaterialIcons name="logout" size={Sizes.ICON} color={Colors.BLACK} />
                              <Text>Log out</Text>
                         </View>
                    </View>
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
     },
     menuContainer: {
          backgroundColor: Colors.PRIMARY_BLUE,
          borderRadius: 10,
          alignSelf: "flex-start",
          paddingVertical: 10,
          paddingHorizontal: 10
     }
});