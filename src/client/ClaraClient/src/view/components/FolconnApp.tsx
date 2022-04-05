import { registerRootComponent } from "expo";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { PageAliases } from "../../enumerations/PageAliases";
import { LoginPage } from "../pages/LoginPage";
import { LoginForm } from "./LoginForm";

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

interface FolconnAppState {
    currentPage: PageAliases;
}

export class FolconnApp extends Component<any, FolconnAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            currentPage: PageAliases.LOGIN
        };

        this.changeCurrentPage = this.changeCurrentPage.bind(this);

    }

    private changeCurrentPage(pageToChange: PageAliases){
        this.setState({"currentPage": pageToChange});

    }

    private buildComponent(){
        let component = (
            <SafeAreaView>
                <View style={styles.screen}>
                    <View style={styles.phoneToolbar}/>
                    {this.state["currentPage"] === PageAliases.LOGIN &&
                        <LoginPage pageRedirectFunction={this.changeCurrentPage}/>

                    }
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
