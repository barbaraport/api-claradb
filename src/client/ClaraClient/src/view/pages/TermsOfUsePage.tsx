import React, { Component } from "react";
import { Button, Text, View } from "react-native";
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

    private async acceptTermsOfUse(accept: boolean) {
        await TermsOfUseService.acceptTermsOfUse(accept, this.props['userID']);

    }

    private buildComponent() {
        let component = (
            <View style={{margin: 30, alignItems: "center"}}>
                <Text>Terms of Use</Text>
                <Text style={{marginBottom: 20}}>{this.state.termsOfUse}</Text>
                <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around"}}>
                    <Button title="Accept" onPress={async () => await this.acceptTermsOfUse(true)}></Button>
                    <Button title="Refuse" onPress={async () => await this.acceptTermsOfUse(false)}></Button>
                </View>
            </View>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();
        return component;
    }

}