import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../enumerations/Colors";
import { LoginForm } from "../components/LoginForm";

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    h1: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 50,
        color: Colors.WHITE
    },
    label: {
        fontSize: 20,
        marginBottom: 40,
        color: Colors.WHITE
    }
})

interface LoginPageProps {
    pageRedirectFunction: Function;

}

export class LoginPage extends Component<LoginPageProps, any> {
    constructor(props: LoginPageProps) {
        super(props);

    }

    private buildComponent(){
        let component = (
            <>
                <LinearGradient colors={["#526ac4", "#b0b8d4", "#526ac4"]} style={styles.background}>
                    <Text style={styles.h1}>FolConn</Text>
                    <Text style={styles.label}>Get notified and read FOLs instantly!</Text>
                    <LoginForm redirectPageFunction={this.props.pageRedirectFunction}/>
                </LinearGradient>
            </>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }

}