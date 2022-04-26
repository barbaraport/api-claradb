import React, { Component } from "react";
import { Text } from "react-native";


interface TermsOfUsePageProps {
    pageRedirectFunction: Function,
    userID: string;
}

interface TermsOfUsePageState {

}

export class TermsOfUsePage extends Component<TermsOfUsePageProps, TermsOfUsePageState> {

    constructor(props: TermsOfUsePageProps) {
        super(props);
    }

    private buildComponent() {

        let component = (
            <Text>Terms of Use</Text>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();
        return component;
    }

}