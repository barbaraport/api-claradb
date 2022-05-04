import React, { Component } from "react";
import { Text, View } from "react-native";
import { TermsOfUseService } from "../../services/TermsOfUseService";


interface TermsOfUsePageProps {
    pageRedirectFunction: Function,
    userID: string;
}

interface TermsOfUsePageState {
    termsOfUse: string;
}

export class TermsOfUsePage extends Component<TermsOfUsePageProps, TermsOfUsePageState> {

    private termsOfUseService = new TermsOfUseService();

    constructor(props: TermsOfUsePageProps) {
        super(props);

        this.state = {
            termsOfUse: ""
        }
    }

    async componentDidMount () {
        const termsOfUseText = await this.termsOfUseService.getTermsOfUse();

        this.setState({termsOfUse: termsOfUseText});
    }

    private buildComponent() {

        let component = (
            <View>
                <Text>Terms of Use</Text>
                <Text>{this.state.termsOfUse}</Text>
            </View>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();
        return component;
    }

}