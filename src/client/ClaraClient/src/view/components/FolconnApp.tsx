import { registerRootComponent } from "expo";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Menu } from "./menu/Menu";

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 20
    },
    phoneToolbar: {
        width: "100%",
        height: 25,
        backgroundColor: "#7dd6fb"
    },
    screen: {
        width: "100%",
        height: "100%",
    }
}
);

export class FolconnApp extends Component<any, any> {
    private buildComponent() {
        let component = (
            <SafeAreaView>
                <Menu></Menu>
                <View style={styles.screen}>
                    <View style={styles.phoneToolbar} />
                    <Text style={styles.bigBlue}>Texto inicial</Text>
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
