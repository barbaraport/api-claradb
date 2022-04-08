import React, { Component } from "react";
import { Text, View } from "react-native";

interface TermsOfUsePageProps {
    pageRedirectFunction: Function;
}

interface TermsOfUsePageState { }

export class TermsOfUsePage extends Component<TermsOfUsePageProps, TermsOfUsePageState> {

    constructor(props: TermsOfUsePageProps) {
        super(props);
    }

    private buildComponent() {
        let component = (
            <View>
                <Text>Terms Of Use Page</Text>
            </View>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();
        return component;
    }

}