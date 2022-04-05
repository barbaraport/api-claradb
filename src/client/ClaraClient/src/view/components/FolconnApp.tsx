import { registerRootComponent } from "expo";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Menu } from "./menu/Menu";
import { Colors } from "../../enumerations/Colors";

const styles = StyleSheet.create({
    bigBlue: {
        color: Colors.PRIMARY_BLUE,
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 10
    },
    phoneToolbar: {
        width: "100%",
        height: 25,
        backgroundColor: Colors.PRIMARY_BLUE
    },
    screen: {
        width: "100%",
        height: "100%"
    },
    content: {
        padding: 10
    }
});

export class FolconnApp extends React.Component<any, any> {

    private buildComponent() {
        let component = (
            <SafeAreaView>
                <View style={styles.screen}>
                    <View style={styles.phoneToolbar} />
                    <View style={styles.content}>
                        <Menu></Menu>
                        <Text style={styles.bigBlue}>FolConn</Text>
                    </View>
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
