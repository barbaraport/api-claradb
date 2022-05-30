import React, { Component } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { TermsOfUseOption } from "../../interfaces/TermsOfUseOptions";
import { TermsOfUseService } from "../../services/TermsOfUseService";
import SelectMultiple from 'react-native-select-multiple'

interface TermsOfUsePageProps {
    pageRedirectFunction: Function,
    userID: string;
}

interface TermsOfUsePageState {
    termsOfUse: string,
    termsOfUseOptions: Array<{label: string, value: string}>,
    userSelectedOptions: Array<{label: string, value: string}>;
}

export class TermsOfUsePage extends Component<TermsOfUsePageProps, TermsOfUsePageState> {

    private termsOfUseService = new TermsOfUseService();

    constructor(props: TermsOfUsePageProps) {
        super(props);

        this.state = {
            termsOfUse: "",
            termsOfUseOptions: [],
            userSelectedOptions: []
        }

        this.onOptionSelected = this.onOptionSelected.bind(this);
        this.acceptTermsOfUse = this.acceptTermsOfUse.bind(this);
        this.getUserAcceptedOptions = this.getUserAcceptedOptions.bind(this);
    }

    async componentDidMount () {
        const termsOfUseText = await this.termsOfUseService.getTermsOfUse();
        const termsOfUseOptions = await this.termsOfUseService.getTermsOfUseOptions();
        const userSelectedTermsOfUse = await this.termsOfUseService.
            getUserSelectedTermsOfUseOptions(this.props['userID']);

        const userSelectedOptions = this.getUserSelectedOptions(userSelectedTermsOfUse, termsOfUseOptions);
        const availableOptions = this.getAvailableOptions(termsOfUseOptions);

        this.setState({
            termsOfUse: termsOfUseText, 
            termsOfUseOptions: availableOptions,
            userSelectedOptions: userSelectedOptions
        });
    }

    private getAvailableOptions(termsOfUseOptions: Array<TermsOfUseOption>) {
        const availableOptions = [];

        for (let i = 0; i < termsOfUseOptions.length; i++) {
            const optionData = termsOfUseOptions[i];
            
            const option = {
                label: optionData['text'],
                value: optionData['option']
            }

            availableOptions.push(option);
        }

        return availableOptions;
    }

    private getUserAcceptedOptions() {
        const acceptedOptions = [];

        for (let i = 0; i < this.state['userSelectedOptions'].length; i++) {
            const option = this.state['userSelectedOptions'][i];
            
            acceptedOptions.push(option['value']);
        }

        return acceptedOptions;
    }

    private async acceptTermsOfUse() {
        const acceptedOptions = this.getUserAcceptedOptions();

        await TermsOfUseService.acceptTermsOfUse(acceptedOptions, this.props['userID']);

    }

    private getUserSelectedOptions(userSelectedTermsOfUse: Array<string>, termsOfUseOptions: Array<TermsOfUseOption>) {
        const optionsList = [];

        for (let i = 0; i < termsOfUseOptions.length; i++) {
            const optionData = termsOfUseOptions[i];
            
            if(userSelectedTermsOfUse.includes(optionData['option'])) {
                const option = {
                    label: optionData['text'],
                    value: optionData['option']
                }

                optionsList.push(option);
            }
        }

        return optionsList;
    }

    private onOptionSelected(selectedOptions: TermsOfUsePageState['userSelectedOptions']) {
        this.setState({userSelectedOptions: selectedOptions});
    }

    private buildComponent() {
        let component = (
            <View style={{display: "flex", margin: 30, alignItems: "center"}}>
                <Text>Terms of Use</Text>
                <ScrollView style={{height: 300, marginBottom: 20}}>
                    <Text style={{marginBottom: 20}}>{this.state.termsOfUse}</Text>
                </ScrollView>
                <View style={{height: 150}}>
                    <SelectMultiple
                        items={this.state['termsOfUseOptions']}
                        selectedItems={this.state['userSelectedOptions']}
                        onSelectionsChange={this.onOptionSelected}/>
                </View>
                <View style={{marginTop: 20}}>
                    <Button title="Accept" onPress={async () => await this.acceptTermsOfUse()}></Button>
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