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

     constructor(props: Props) {
          super(props)

          this.state = { showMenu: false }
     }

     private buildMenu() {
          return (
               <View style={styles.menuContainer}>
                    <View style={styles.menuItem}>
                         <MaterialIcons name="home" size={Sizes.ICON} color={Colors.BLACK} />
                         <Text style={styles.p}>Home</Text>
                    </View>
                    <View style={styles.menuItem}>
                         <MaterialIcons name="directions-car" size={Sizes.ICON} color={Colors.BLACK} />
                         <Text style={styles.p}>Cars</Text>
                    </View>
                    <View style={styles.menuItem}>
                         <MaterialIcons name="insert-drive-file" size={Sizes.ICON} color={Colors.BLACK} />
                         <Text style={styles.p}>FOLs</Text>
                    </View>
                    <View style={styles.menuItem}>
                         <MaterialIcons name="logout" size={Sizes.ICON} color={Colors.BLACK} />
                         <Text style={styles.p}>Log out</Text>
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
          backgroundColor: Colors.PRIMARY_BLUE,
          borderRadius: 10,
          alignSelf: "flex-start",
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginLeft: 5,

     },
     p: {
          fontSize: 20
     }
});