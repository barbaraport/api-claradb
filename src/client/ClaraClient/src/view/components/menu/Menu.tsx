import React, { Component } from "react";
import { Button, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export class Menu extends Component<any, any> {

     private showMenuOptions() {
          
     }

     private buildMenu() {
          return (
               <>
                    <MaterialIcons name="menu" size={24} color="black"/>
               </>
          );
     }

     render() {
          let component = this.buildMenu();
          return component;
     }
}