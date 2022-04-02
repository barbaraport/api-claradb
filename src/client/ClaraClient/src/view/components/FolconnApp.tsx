import { registerRootComponent } from "expo";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
      margin: 20
    },
    red: {
      color: 'red',
    },
  });

export class FolconnApp extends Component<any, any> {
    private buildComponent(){
        let component = (
            <SafeAreaView>
                <View>
                    <Text style={styles.bigBlue}>Rodei opora</Text>
                </View>
            </SafeAreaView>
        );

        return component;
    }

    render() {
        let component = this.buildComponent();

        return component;
    }
}

registerRootComponent(FolconnApp);
