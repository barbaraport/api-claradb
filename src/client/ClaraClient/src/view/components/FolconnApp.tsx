import { registerRootComponent } from "expo";
import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Colors } from "../../enumerations/Colors";
import { PageAliases } from "../../enumerations/PageAliases";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

const styles = StyleSheet.create({
    phoneToolbar: {
        width: "100%",
        height: 25,
        backgroundColor: Colors.BLUE
    },
    screen: {
        width: "100%",
        height: "100%"
    },
    content: {
        padding: 10
    }
});

interface FolconnAppState {
    currentPage: PageAliases;
}

export class FolconnApp extends Component<any, FolconnAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            currentPage: PageAliases.HOME
        };

        this.changeCurrentPage = this.changeCurrentPage.bind(this);

    }

    private changeCurrentPage(pageToChange: PageAliases){
        this.setState({"currentPage": pageToChange});

    }

    private buildComponent(){
        let component = (
            <SafeAreaView>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.screen}>
                    {this.state["currentPage"] === PageAliases.LOGIN &&
                        <LoginPage pageRedirectFunction={this.changeCurrentPage}/>

                    }
                    {this.state["currentPage"] === PageAliases.HOME &&
                        <HomePage pageRedirectFunction={this.changeCurrentPage}/>
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
