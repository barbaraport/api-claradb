import React, { Component } from "react";
import { Text, View } from "react-native";

interface FOLsPageProps {
    pageRedirectFunction: Function;
}

interface FOLsPageState { }

export class FOLsPage extends Component<FOLsPageProps, FOLsPageState> {

    constructor(props: FOLsPageProps) {
        super(props);
    }

    private buildComponent() {
        let component = (
            <View>
                <Text>FOLs Page</Text>
            </View>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();
        return component;
    }

}