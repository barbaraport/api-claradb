import React, { Component } from "react";
import { Text } from "react-native";

export class Menu extends Component<any, any> {

     private buildMenu () {
          let text = <Text>Oi. Aqui vai ficar o menu</Text>
          return text;
     }

     render () {
          let component = this.buildMenu();
          return component;
     }
}