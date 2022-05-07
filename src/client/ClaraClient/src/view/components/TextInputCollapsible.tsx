import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../assets/styles/Styles";
import { Collapsible } from './Collapsible';

interface CollapsibleProps {
    title: string,
    performsSearchFunction: Function;
    userID: string;
    placeholder: string;
}

interface CollapsibleState {
    isCollapsed: boolean;
    value: string;
}

export class TextInputCollapsible extends React.Component<CollapsibleProps, CollapsibleState>{
    constructor(props: CollapsibleProps) {
        super(props);

        this.state = {
            isCollapsed: false,
            value: ''
        }

        this.changeInputText = this.changeInputText.bind(this);
        this.performsSearch = this.performsSearch.bind(this);

    }

    private changeInputText(newValue: string) {
        this.setState({ value: newValue });

    }

    private performsSearch() {
        this.props.performsSearchFunction(this.state["value"]);

    }

    private buildComponent() {
        const textInput: JSX.Element = (
            <View>
                <View style={Styles.textInputCollapsible}>
                    <TextInput placeholder={this.props.placeholder} style={Styles.textInput} onChangeText={(value) => this.changeInputText(value)}></TextInput>
                    <TouchableOpacity style={[Styles.search, { marginLeft: 3 }]} activeOpacity={0.5} onPress={this.performsSearch}>
                        <Text>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

        let component = (
            <View style={{ marginBottom: 10 }}>
                <Collapsible title={this.props.title} component={textInput} valueDisplay={this.state.value}></Collapsible>
            </View>
        )

        return component;
    }

    render() {
        const component = this.buildComponent();
        return component;
    }
}