import React, { Component } from "react";
import { StyleSheet, TouchableHighlight, TouchableWithoutFeedbackBase, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Sizes } from "../../../enumerations/sizes";
import { Colors } from "../../../enumerations/Colors";

interface Props {

}

interface State {
     showMenu: boolean;
}

export class Menu extends Component<Props, State> {

     private buildMenu() {
          if (this.state.showMenu === true) {
               return (
                    <View style={styles.menu}>
                         <MaterialIcons name="home" size={Sizes.ICON} color="black" />
                         <MaterialIcons name="directions-car" size={Sizes.ICON} color="black" />
                         <MaterialIcons name="insert-drive-file" size={Sizes.ICON} color="black" />
                         <MaterialIcons name="logout" size={Sizes.ICON} color="black" />
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
               <TouchableHighlight onPress={() => { this.handleMenu }}>
                    <View>
                         <View>
                              <MaterialIcons name="menu" size={Sizes.ICON} color={Colors.BLACK} />
                         </View>
                         <View>
                              {this.buildMenu}
                         </View>
                    </View>

               </TouchableHighlight>

          );

          return menu;
     }

     render() {
          let component = this.buildMenuComponent();
          return component;
     }
}

const styles = StyleSheet.create({
     menu: {
         
     }
 });